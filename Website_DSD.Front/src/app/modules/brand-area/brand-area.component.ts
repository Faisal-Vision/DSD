import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { Column, Task, TaskService } from 'src/app/core/services/Task/task.service';

@Component({
  selector: 'app-brand-area',
  templateUrl: './brand-area.component.html',
  styleUrls: ['./brand-area.component.scss']
})
export class BrandAreaComponent  {
  // @ViewChild('brandSwiper', { static: false }) brandSwiper!: ElementRef;


  //  ngAfterViewInit(): void {
  //   if (!this.brandSwiper?.nativeElement) {
  //     console.error("Swiper element not found!");
  //     return;
  //   }

  //   const swiperParams: any = {
  //     breakpoints: {
  //       1200: {
  //         slidesPerView: 5,
  //       },
  //       992: {
  //         slidesPerView: 4,
  //       },
  //       575: {
  //         slidesPerView: 3,
  //       },
  //       320: {
  //         slidesPerView: 2,
  //       }
  //     }
  //   };

  //   // Apply Swiper parameters to the native element
  //   Object.assign(this.brandSwiper.nativeElement, swiperParams);

  //   // Initialize Swiper after setting parameters
  //   if (typeof this.brandSwiper.nativeElement.initialize === 'function') {
  //     this.brandSwiper.nativeElement.initialize();
  //   } else {
  //     console.error("Swiper initialization function not found!");
  //   }
  // }
 columns: Column[] = [];

  constructor(private taskService: TaskService) {}

  ngOnInit(): void {
    this.columns = this.taskService.getColumns();
  }

  getPriorityClass(priority: string | undefined): string {
    if (!priority) return '';
    
    const priorityMap: {[key: string]: string} = {
      'Breaking Issue': 'priority-breaking',
      'Release': 'priority-release',
      'Customer': 'priority-customer',
      'Kanban': 'priority-kanban',
      'Feature': 'priority-feature',
      'CustomSample': 'priority-custom'
    };
    
    return priorityMap[priority] || '';
  }

  getColumnBorderStyle(status: string): string {
    const borderMap: {[key: string]: string} = {
      'todo': '3px solid #1f88e5',
      'in-progress': '3px solid orange', 
      'rejected': '3px solid #E64A19',
      'done': '3px solid #02897B'
    };
    
    return borderMap[status] || '4px solid #dee2e6';
  }

  drop(event: CdkDragDrop<Task[]>, columnStatus: Task['status']): void {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
      
      const task = event.container.data[event.currentIndex];
      this.taskService.updateTaskStatus(task.id, columnStatus);
    }
  }

  getConnectedLists(): string[] {
    return this.columns.map(column => column.id);
  }

  closeTask(task: Task, column: Column): void {
    if (confirm(`Are you sure you want to close task ${task.id}?`)) {
      const taskIndex = column.tasks.indexOf(task);
      if (taskIndex > -1) {
        column.tasks.splice(taskIndex, 1);
      }
    }
  }

   // دوال الإحصائيات
  getTotalTasksCount(): number {
    return this.columns.reduce((total, column) => total + column.tasks.length, 0);
  }

  getInProgressTasksCount(): number {
    const inProgressColumn = this.columns.find(col => col.status === 'in-progress');
    return inProgressColumn ? inProgressColumn.tasks.length : 0;
  }

  getResolvedTasksCount(): string {
    const doneColumn = this.columns.find(col => col.status === 'done');
    const doneCount = doneColumn ? doneColumn.tasks.length : 0;
    const totalCount = this.getTotalTasksCount();
    return `${doneCount}/${totalCount}`;
  }

  getClosedTasksCount(): number {
    const rejectedColumn = this.columns.find(col => col.status === 'rejected');
    return rejectedColumn ? rejectedColumn.tasks.length : 0;
  }

  // دالة جديدة لعرض عدد المهام في كل عمود
  getColumnTaskCount(column: Column): string {
    const totalTasks = this.getTotalTasksCount();
    
    switch(column.status) {
      case 'done':
        // للمهام المكتملة: المكتملة/الإجمالي
        return `${column.tasks.length}/${totalTasks}`;
      case 'rejected':
        // للمهام المرفوضة: المرفوضة/الإجمالي
        return `${column.tasks.length}/${totalTasks}`;
      case 'in-progress':
        // للمهام قيد التنفيذ: النشطة/الإجمالي
        return `${column.tasks.length}/${totalTasks}`;
      case 'todo':
        // للمهام الجديدة: الجديدة/الإجمالي
        return `${column.tasks.length}/${totalTasks}`;
      default:
        return `(${column.tasks.length})`;
    }
  }

  
}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-projects-list',
  templateUrl: './projects-list.component.html',
  styleUrls: ['./projects-list.component.scss']
})
export class ProjectsListComponent implements OnInit {
  currentLang = '';
  projects = [
    {
      id: 1,
      name: 'strategic-planning',
      title: 'نظام إدارة الاستراتيجية',
      titleEn: 'Strategic Planning',
      description: 'نظام متكامل لإدارة الاستراتيجيات والأهداف والمؤشرات مع متابعة التنفيذ وتحليل الأداء.',
      descriptionEn: 'An integrated system for managing strategies, objectives, and KPIs with execution tracking and performance analysis.',
      icon: 'hgi hgi-stroke hgi-rounded hgi-target-01',
      color: '#00adb1',
      gradient: 'linear-gradient(135deg, #00adb1 0%, #77479b 100%)',
      mainImage: 'assets/images/projects/str-2.jpeg',
      categoryType: 'planning',
      categoryIcon: 'hgi hgi-stroke hgi-rounded hgi-target-01',
      category: 'التخطيط الاستراتيجي',
      categoryEn: 'Strategic Planning',
      briefDescription: 'نظام متكامل لإدارة الاستراتيجيات والأهداف والمؤشرات مع متابعة التنفيذ وتحليل الأداء.',
      briefDescriptionEn: 'An integrated system for managing strategies, objectives, and KPIs with execution tracking.',
      notes: ['أهداف', 'مؤشرات', 'متابعة'],
      notesEn: ['Objectives', 'KPIs', 'Tracking'],
      price: 'نظام ذكي',
      priceEn: 'Smart System'
    },
    {
      id: 2,
      name: 'projects-management',
      title: 'نظام إدارة المشاريع',
      titleEn: 'Projects Management',
      description: 'نظام احترافي لإدارة المشاريع ومتابعة المهام والميزانيات والجداول الزمنية وفرق العمل.',
      descriptionEn: 'A professional system for managing projects, tracking tasks, budgets, timelines, and work teams.',
      icon: 'hgi hgi-stroke hgi-rounded hgi-dashboard-square-01',
      color: '#77479b',
      gradient: 'linear-gradient(135deg, #00adb1 0%, #77479b 100%)',
      mainImage: 'assets/images/projects/pm-7.png',
      categoryType: 'management',
      categoryIcon: 'hgi hgi-stroke hgi-rounded hgi-structure-01',
      category: 'إدارة المشاريع',
      categoryEn: 'Projects Management',
      briefDescription: 'نظام احترافي لإدارة المشاريع ومتابعة المهام والميزانيات والجداول الزمنية وفرق العمل.',
      briefDescriptionEn: 'A professional system for managing projects, tracking tasks, budgets, and work teams.',
      notes: ['مشاريع', 'ميزانية', 'مهام'],
      notesEn: ['Projects', 'Budget', 'Tasks'],
      price: 'احترافي',
      priceEn: 'Professional'
    },
    {
      id: 3,
      name: 'task-management',
      title: 'نظام إدارة المهام',
      titleEn: 'Task Management',
      description: 'تنظيم وتوزيع المهام مع متابعة التقدم والمواعيد والأولويات بكفاءة عالية.',
      descriptionEn: 'Organizing and distributing tasks with follow-up on progress, appointments, and priorities with high efficiency.',
      icon: 'hgi hgi-stroke hgi-rounded hgi-task-daily-01',
      color: '#77479b',
      gradient: 'linear-gradient(135deg, #00adb1 0%, #77479b 100%)',
      mainImage: 'assets/images/projects/task-1.png',
      categoryType: 'tasks',
      categoryIcon: 'hgi hgi-stroke hgi-rounded hgi-task-daily-01',
      category: 'إدارة المهام',
      categoryEn: 'Task Management',
      briefDescription: 'تنظيم وتوزيع المهام مع متابعة التقدم والمواعيد والأولويات بكفاءة عالية.',
      briefDescriptionEn: 'Organizing and distributing tasks with follow-up on progress, deadlines, and priorities.',
      notes: ['مهام', 'جدولة', 'فريق'],
      notesEn: ['Tasks', 'Scheduling', 'Team'],
      price: 'كفاءة عالية',
      priceEn: 'High Efficiency'
    },
    {
      id: 4,
      name: 'digital-indicators',
      title: 'نظام المؤشرات الرقمية',
      titleEn: 'Digital Indicators',
      description: 'تتبع وتحليل المؤشرات الرقمية الرئيسية مع لوحات معلومات تفاعلية وتقارير ذكية.',
      descriptionEn: 'Tracking and analyzing key digital indicators with interactive dashboards and smart reports.',
      icon: 'hgi hgi-stroke hgi-rounded hgi-analytics-up',
      color: '#77479b',
      gradient: 'linear-gradient(135deg, #00adb1 0%, #77479b 100%)',
      mainImage: 'assets/images/projects/ind-3.png',
      categoryType: 'indicators',
      categoryIcon: 'hgi hgi-stroke hgi-rounded hgi-analytics-01',
      category: 'المؤشرات الرقمية',
      categoryEn: 'Digital Indicators',
      briefDescription: 'تتبع وتحليل المؤشرات الرقمية الرئيسية مع لوحات معلومات تفاعلية وتقارير ذكية.',
      briefDescriptionEn: 'Tracking and analyzing key digital indicators with interactive dashboards and smart reports.',
      notes: ['مؤشرات', 'تحليلات', 'تقارير'],
      notesEn: ['KPIs', 'Analytics', 'Reports'],
      price: 'حوكمة رقمية',
      priceEn: 'Digital Governance'
    },
    {
      id: 5,
      name: 'performance-indicators',
      title: 'نظام مؤشرات الأداء',
      titleEn: 'Performance Indicators',
      description: 'تتبع وتحليل مؤشرات الأداء الرئيسية مع لوحات معلومات تفاعلية وتقارير ذكية.',
      descriptionEn: 'Tracking and analyzing key performance indicators with interactive dashboards and smart reports.',
      icon: 'hgi hgi-stroke hgi-rounded hgi-analytics-up',
      color: '#77479b',
      gradient: 'linear-gradient(135deg, #00adb1 0%, #77479b 100%)',
      mainImage: 'assets/images/projects/deg-4.jpeg',
      categoryType: 'performance',
      categoryIcon: 'hgi hgi-stroke hgi-rounded hgi-presentation-line-chart-01',
      category: 'مؤشرات الأداء',
      categoryEn: 'Performance Indicators',
      briefDescription: 'تتبع وتحليل مؤشرات الأداء الرئيسية مع لوحات معلومات تفاعلية وتقارير ذكية.',
      briefDescriptionEn: 'Tracking and analyzing key performance indicators with interactive dashboards and smart reports.',
      notes: ['أداء', 'إحصائيات', 'تقييم'],
      notesEn: ['Performance', 'Stats', 'Evaluation'],
      price: 'لوحات قياس ذكية',
      priceEn: 'Smart Dashboards'
    },
    {
      id: 6,
      name: 'files-library',
      title: 'مكتبة الملفات',
      titleEn: 'Files Library',
      description: 'نظام منظم لإدارة المستندات والملفات مع إمكانية البحث والمشاركة والتصنيف الذكي.',
      descriptionEn: 'An organized system for managing documents and files with search, sharing, and smart classification capabilities.',
      icon: 'hgi hgi-stroke hgi-rounded hgi-folder-01',
      color: '#77479b',
      gradient: 'linear-gradient(135deg, #00adb1 0%, #77479b 100%)',
      mainImage: 'assets/images/projects/lab-4.jpeg',
      categoryType: 'library',
      categoryIcon: 'hgi hgi-stroke hgi-rounded hgi-folder-library',
      category: 'مكتبة الملفات',
      categoryEn: 'Files Library',
      briefDescription: 'نظام منظم لإدارة المستندات والملفات مع إمكانية البحث والمشاركة والتصنيف الذكي.',
      briefDescriptionEn: 'An organized system for managing documents and files with search and smart classification.',
      notes: ['مستندات', 'أرشفة', 'مشاركة'],
      notesEn: ['Documents', 'Archiving', 'Sharing'],
      price: 'تصنيف ذكي',
      priceEn: 'Smart Filing'
    }
  ];

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.currentLang = localStorage.getItem('lang') || environment.defaultLang;
  }

  get isRTL(): boolean {
    return this.currentLang === 'ar';
  }

  trackByProjectId(index: number, item: any): number {
    return item.id;
  }

  navigateToProject(projectName: string): void {
    this.router.navigate(['/project-details', projectName]);
  }
}

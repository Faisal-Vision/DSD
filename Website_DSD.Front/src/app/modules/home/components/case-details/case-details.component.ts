import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProjectsCatalogService } from 'src/app/core/services/projectsService/projects-catalog.service';


export interface Project {
  id: number;
  title: string;
  category: string;
  completedDate: string;
  client: string;
  location: string;
  briefDescription: string;
  bannerImage: string;
  mainImage: string;
  defaultImage: string;
  images?: string[]; // Optional in case some projects don't have additional images
  overview: ProjectOverview;
  listingThumbnail: string;
  listingSummary: string;
  projectLink: string;
}

export interface ProjectOverview {
  description: string;
  projectChallenges?: string[]; // Optional in case some projects don't have challenges
  projectOverview: string;
}

@Component({
  selector: 'app-case-details',
  templateUrl: './case-details.component.html',
  styleUrls: ['./case-details.component.scss']
})
export class CaseDetailsComponent {

  project!: Project;
  errorMessage: string | null = null;
  allProjects: Project[] = [];
  currentProjectTitle: string = '';
constructor(
    private route: ActivatedRoute,
    private projectCatalogService: ProjectsCatalogService
  ) {}
ngOnInit(): void {
    // Subscribe to route parameter changes
    this.route.paramMap.subscribe((params) => {
      const projectId = params.get('id');
      this.loadProject(parseInt(projectId || '1', 10));
    });

    // Load all projects only once
    this.loadAllProjects();
  }

  private loadProject(projectId: number): void {
    this.projectCatalogService.getProjectById(projectId).subscribe({
      next: (projectData: Project) => {
        this.project = projectData;
        this.currentProjectTitle = projectData.title;
        this.errorMessage = null;
      },
      error: (error) => {
        console.error('Error fetching project:', error);
        this.errorMessage = 'Project not found.';
      }
    });
  }

  private loadAllProjects(): void {
    this.projectCatalogService.getAllProjects().subscribe({
      next: (projects: Project[]) => {
        this.allProjects = projects;
        this.errorMessage = null;
      },
      error: (error) => {
        console.error('Error fetching all projects:', error);
        this.errorMessage = 'Could not load projects.';
      }
    });
  }


}

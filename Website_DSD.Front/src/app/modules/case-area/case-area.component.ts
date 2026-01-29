import { Component, OnInit } from '@angular/core';
import { ProjectsCatalogService } from 'src/app/core/services/projectsService/projects-catalog.service';

export interface ProjectOverview {
  description: string;
  projectChallenges?: string[];
  projectOverview: string;
}

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
  images?: string[];
  overview: ProjectOverview;
  listingThumbnail: string;
  listingSummary: string;
  projectLink: string;
}

@Component({
  selector: 'app-case-area',
  templateUrl: './case-area.component.html',
  styleUrls: ['./case-area.component.scss'],
})
export class CaseAreaComponent implements OnInit {
  projects: Project[] = [];
  isRTL = false;

  constructor(
    private readonly projectCatalogService: ProjectsCatalogService
  ) {}

  ngOnInit(): void {
    this.fetchProjects();
    this.isRTL = document.documentElement.getAttribute('dir') === 'rtl';
  }

  private fetchProjects(): void {
    this.projectCatalogService.getAllProjects().subscribe({
      next: (data: Project[]) => {
        this.projects = data;
      },
      error: (error: unknown) => {
        console.error('Error loading projects:', error);
      },
    });
  }

  trackByProjectId(index: number, project: Project): number {
    return project.id ?? index;
  }
}

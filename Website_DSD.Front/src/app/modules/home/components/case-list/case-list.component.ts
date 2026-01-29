import { Component } from '@angular/core';
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
  selector: 'app-case-list',
  templateUrl: './case-list.component.html',
  styleUrls: ['./case-list.component.scss']
})
export class CaseListComponent {

   projects:Project[] = [];
  constructor(private projectCatalogService: ProjectsCatalogService) {}

  ngOnInit(): void {
    this.projectCatalogService.getAllProjects().subscribe({
      next: (data) => (this.projects = data),
      error: (e) => console.error(e),
    });
  }

}

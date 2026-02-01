import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ServiceCatalogService } from 'src/app/core/services/Service-area/service-catalog.service';
import { environment } from 'src/environments/environment';
interface Service {
  title: string;
  name: string;
  description: string;
  icon: string;
  shape: string;
  image: string;
  benefits: string[];
  faq: { question: string; answer: string }[];
}
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  services: Service[] = [];
  isRTL: boolean = false;

  constructor(private serviceCatalogService: ServiceCatalogService) {}

  ngOnInit(): void {
    const currentLang = localStorage.getItem('lang') || environment.defaultLang;
    this.isRTL = currentLang === 'ar';

    this.serviceCatalogService.getAllServices().subscribe({
      next: (data) => (this.services = data),
      error: (e) => console.error(e),
    });
  }

  get logoSrc(): string {
    return this.isRTL
      ? 'assets/images/logo/svg/DSD_Logo_White_Arabic.svg'
      : 'assets/images/logo/svg/DSD_Logo_White.svg';
  }
}

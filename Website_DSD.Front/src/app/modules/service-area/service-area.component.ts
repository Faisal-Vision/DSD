import { Component, ElementRef, ViewChild, AfterViewInit, OnInit, OnDestroy } from '@angular/core';
import { ServiceCatalogService } from 'src/app/core/services/Service-area/service-catalog.service';
import { finalize, takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { Service, ServiceCategory } from 'src/app/core/services/Service-area/service.model';

@Component({
  selector: 'app-service-area',
  templateUrl: './service-area.component.html',
  styleUrls: ['./service-area.component.scss'],
})
export class ServiceAreaComponent implements AfterViewInit, OnInit, OnDestroy {
  @ViewChild('swiper2', { static: false }) swiper2!: ElementRef;

  services: Service[] = [];
  categories: ServiceCategory[] = [];
  isLoading = false;
  errorMessage: string | null = null;
  private destroy$ = new Subject<void>();

  constructor(private serviceCatalogService: ServiceCatalogService) {}

  ngOnInit(): void {
    this.fetchServices();
  }

  fetchServices(): void {
    this.isLoading = true;
    this.serviceCatalogService
      .getServiceCategories()
      .pipe(
        takeUntil(this.destroy$),
        finalize(() => (this.isLoading = false))
      )
      .subscribe({
        next: (data: ServiceCategory[]) => {
          this.categories = data;
          this.services = data.flatMap((category) => category.services);
          this.errorMessage = data.length ? null : 'No services to display.';
        },
        error: (e: any) => {
          console.error(e);
          this.errorMessage = 'Unable to load services.';
        },
      });
  }

  ngAfterViewInit(): void {
    const swiperParams: any = {
      breakpoints: {
        0: {
          slidesPerView: 1,
        },
        640: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 3,
        },
      },
      navigation: {
        nextEl: '.custom-next-button',
        prevEl: '.custom-prev-button',
      },
    };

    if (this.swiper2?.nativeElement) {
      Object.assign(this.swiper2.nativeElement, swiperParams);
      this.swiper2.nativeElement.initialize();
    }
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}

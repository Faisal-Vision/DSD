import { Component } from '@angular/core';
import { ServiceCatalogService } from 'src/app/core/services/Service-area/service-catalog.service';


@Component({
  selector: 'app-counter-core',
  templateUrl: './counter-core.component.html',
  styleUrls: ['../banner-area/banner-area.component.scss']

})
export class CounterCoreComponent {
  constructor(private readonly serviceCatalogService: ServiceCatalogService) {
  
   }


}

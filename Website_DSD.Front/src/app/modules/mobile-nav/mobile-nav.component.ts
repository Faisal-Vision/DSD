import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-mobile-nav',
  templateUrl: './mobile-nav.component.html',
  styleUrls: ['./mobile-nav.component.scss'],
})
export class MobileNavComponent implements OnInit {
  @Output() close = new EventEmitter<void>();
  isRTL: boolean = false;

  ngOnInit(): void {
    const currentLang = localStorage.getItem('lang') || environment.defaultLang;
    this.isRTL = currentLang === 'ar';
  }

  get logoSrc(): string {
    return this.isRTL
      ? 'assets/images/logo/svg/DSD_Logo_Gradient_Arabic.svg'
      : 'assets/images/logo/svg/DSD_Logo_Gradient.svg';
  }

  // Emit close event
  closeSidebar() {
    this.close.emit();
  }
}

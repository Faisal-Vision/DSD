import { environment } from 'src/environments/environment';
import { LangService } from '../../services/lang/lang.service';
import { Component, HostListener, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Router } from '@angular/router';
// import { UserType } from 'src/app/enums/user-type';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  viewCollapse: boolean = false;
  currentLang = '';
  isRTL: boolean = false;
  darkTheme: any;
  //TODO Chang isLogin Flag when login
  isLogin: boolean = true;
  burgerIcon: boolean = true;
  mainStandards = [];
  currentEncUserId;
  isSidebarOpen = false;
  navHidden = false;
  navFixed = false;
  private lastScrollTop = 0;
  private scrollThreshold = 80;

  constructor(private lang: LangService,
              private translate: TranslateService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.currentLang = localStorage.getItem('lang') || environment.defaultLang;
    this.currentEncUserId = localStorage.getItem('userId');
    this.isRTL = this.currentLang === 'ar';
    var localStorageTheme = localStorage.getItem('theme');
    if(localStorageTheme == 'dark')
    {

      this.darkTheme = true;

    this.lang.currentTheme.next('dark' );
    localStorage.setItem('theme', 'dark' );
    }
    else
    {
      this.darkTheme = false;

    this.lang.currentTheme.next('light');
    localStorage.setItem('theme',  'light');
    }
  }

  @HostListener('window:scroll')
  onWindowScroll(): void {
    const currentScroll = window.pageYOffset || document.documentElement.scrollTop;

    if (currentScroll > this.scrollThreshold) {
      this.navFixed = true;
      this.navHidden = currentScroll > this.lastScrollTop;
    } else {
      this.navFixed = false;
      this.navHidden = false;
    }

    this.lastScrollTop = Math.max(0, currentScroll);
  }

  toggleSidebar() {
    this.isSidebarOpen = !this.isSidebarOpen;


  }

  // Dynamically change the logo based on the language (RTL/LTR)
  get logoSrc(): string {
    return this.isRTL
      ? '../../../../assets/images/logo/svg/DSD_Logo_Gradient_Arabic.svg'
      : '../../../../assets/images/logo/svg/DSD_Logo_Gradient.svg';
  }

  get sidebarLogoSrc(): string {
    return this.isRTL
      ? 'assets/images/logo/svg/DSD_Logo_White_Arabic.svg'
      : 'assets/images/logo/svg/DSD_Logo_White.svg';
  }

  // Handle language change dynamically
  changeLanguage() {
    const lang = this.currentLang === 'ar' ? 'en' : 'ar';
    this.currentLang = lang;
    this.isRTL = lang === 'ar'; // Update the RTL flag based on the new language
    this.lang.langChanged(lang); // Inform other services of the language change

    // You don't need to reload the page, Angular will update the view
    localStorage.setItem('lang', lang); // Optionally, save the selected language to localStorage
    window.location.reload();
  }

  toggleDarkTheme(): void {
    this.darkTheme = document.body.classList.toggle('dark');
    this.lang.currentTheme.next(this.darkTheme ? 'dark' : 'light');
    localStorage.setItem('theme', this.darkTheme ? 'dark' : 'light');
  }


  toggleMenu() {
    this.burgerIcon = !this.burgerIcon;
    this.viewCollapse = !this.viewCollapse;
    document.body.classList.toggle('g-sidenav-pinned');
  }
}

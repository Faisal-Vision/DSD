import { Component, OnInit, AfterViewInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-preloader',
  templateUrl: './preloader.component.html',
  styleUrls: ['./preloader.component.scss'],
})
export class PreloaderComponent implements OnInit, AfterViewInit {
  private preloader: HTMLElement | null = null;
  private loadingText: HTMLElement | null = null;

  constructor(private renderer: Renderer2) {}

  ngOnInit(): void {
    // Ensure the preloader is available when the component is initialized
    this.preloader = document.getElementById('preloader');
    this.loadingText = document.querySelector('.loading');

    // Add a class to the body to indicate that the loading is active
    this.renderer.addClass(document.body, 'loading-active');
  }

  ngAfterViewInit(): void {
    // You can simulate the completion of a loading process here
    setTimeout(() => {
      this.hidePreloader();
    }, 3000); // 3 seconds delay to simulate loading completion
  }

  hidePreloader(): void {
    if (this.preloader && this.loadingText) {
      // Add 'isdone' class to trigger the CSS animation for hiding the preloader
      this.renderer.addClass(this.preloader, 'isdone');
      this.renderer.addClass(this.loadingText, 'isdone');
      
      // Remove 'loading-active' class from the body to signify loading is done
      this.renderer.removeClass(document.body, 'loading-active');
    }
  }
}

import { Component, OnInit, AfterViewInit, Renderer2, Input, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-preloader',
  templateUrl: './preloader.component.html',
  styleUrls: ['./preloader.component.scss'],
})
export class PreloaderComponent implements OnInit, AfterViewInit, OnDestroy {
  @Input() duration: number = 3000; // Make duration configurable
  private timeoutId: any;

  constructor(private renderer: Renderer2) {}

  ngOnInit(): void {
    // Add loading-active class to body
    this.renderer.addClass(document.body, 'loading-active');
  }

  ngAfterViewInit(): void {
    // Simulate loading completion with configurable duration
    this.timeoutId = setTimeout(() => this.hidePreloader(), this.duration);
  }

  hidePreloader(): void {
    const preloader = document.getElementById('preloader') as HTMLElement;
    const loadingText = document.querySelector('.loading') as HTMLElement;

    if (preloader && loadingText) {
      // Fade-out animation classes
      this.renderer.addClass(preloader, 'isdone');
      this.renderer.addClass(loadingText, 'isdone');

      // Remove loading-active class from body
      this.renderer.removeClass(document.body, 'loading-active');

      // Optional: listen for animation end to remove from DOM
      this.renderer.listen(preloader, 'transitionend', () => {
        preloader.remove();
      });
    }
  }

  ngOnDestroy(): void {
    if (this.timeoutId) {
      clearTimeout(this.timeoutId); // Clear timeout if component is destroyed
    }
  }
}

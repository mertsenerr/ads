
import { Component, ChangeDetectionStrategy, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { LanguageService } from './services/language.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    NavbarComponent,
    FooterComponent,
    RouterOutlet
  ],
  template: `
    <app-navbar />
    <main>
      <router-outlet></router-outlet>
    </main>
    <app-footer />
    
    <!-- Floating Action Buttons -->
    @if (showScrollBtn()) {
      <div class="fixed bottom-8 right-8 z-50 flex flex-col gap-3">
        
        <!-- Theme Toggle Button -->
        <button 
          (click)="themeService.toggle()"
          class="w-12 h-12 flex items-center justify-center bg-obsidian-matte border border-champagne/30 text-champagne hover:bg-champagne hover:text-obsidian-deep transition-all duration-500 shadow-[0_0_20px_rgba(0,0,0,0.5)] animate-[fadeIn_0.3s_ease-out]"
          [attr.aria-label]="'Switch to ' + (themeService.isDark() ? 'light' : 'dark') + ' mode'"
        >
          <span class="material-symbols-outlined text-xl transition-transform duration-500" [class.rotate-180]="!themeService.isDark()">
              {{ themeService.isDark() ? 'light_mode' : 'dark_mode' }}
          </span>
        </button>

        <!-- Scroll to Top Button -->
        <button 
          (click)="scrollToTop()"
          class="w-12 h-12 flex items-center justify-center bg-obsidian-matte border border-champagne/30 text-champagne hover:bg-champagne hover:text-obsidian-deep transition-all duration-500 shadow-[0_0_20px_rgba(0,0,0,0.5)] animate-[fadeIn_0.3s_ease-out]"
          aria-label="Scroll to top"
        >
          <span class="material-symbols-outlined text-xl">arrow_upward</span>
        </button>

      </div>
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
    langService = inject(LanguageService);
    showScrollBtn = signal(false);

    constructor() {
      if (typeof window !== 'undefined') {
        window.addEventListener('scroll', () => {
          // Show button after scrolling down 500px
          this.showScrollBtn.set(window.scrollY > 500);
        });
      }
    }

    scrollToTop() {
      if (typeof window !== 'undefined') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }
}

import { Component, ChangeDetectionStrategy, signal, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LanguageService, Lang } from '../../services/language.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <!-- MAIN NAVBAR HEADER -->
    <nav 
      class="fixed top-0 w-full z-[100] border-b border-champagne/10 transition-all duration-500 ease-in-out"
      [class.bg-background-dark/90]="bgTransparent() && !isMobileMenuOpen()"
      [class.backdrop-blur-2xl]="bgTransparent() && !isMobileMenuOpen()"
      [class.-translate-y-full]="isHidden()"
      [class.translate-y-0]="!isHidden()"
    >
      <div class="w-full px-3 sm:px-6 lg:px-12 h-24 sm:h-28 md:h-32 lg:h-20 flex items-center justify-between">
        
        <!-- Logo -->
        <a routerLink="/home" (click)="closeMobileMenu()" class="flex-shrink-0 relative z-[101]">
          <img 
            src="assets/images/adslogo.png" 
            alt="ADS - Audit Data Stocktake" 
            class="h-20 sm:h-32 mr-[20px] md:h-28 lg:h-36 w-auto object-contain transition-all duration-300 hover:brightness-125 mt-[20px]"
          />
        </a>

        <!-- Desktop Navigation -->
        <div class="hidden lg:flex items-center justify-center flex-1 px-8">
          <div class="flex items-center gap-6 xl:gap-10 text-[10px] uppercase tracking-[0.2em] font-medium text-gold-muted/70">
            <a routerLink="/home" routerLinkActive="text-champagne" [routerLinkActiveOptions]="{exact: true}" class="hover:text-champagne transition-colors duration-300 relative group py-2 whitespace-nowrap">
              {{ langService.t().navbar.home }}
              <span class="absolute bottom-0 left-0 w-0 h-[1px] bg-champagne transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a routerLink="/about" routerLinkActive="text-champagne" class="hover:text-champagne transition-colors duration-300 relative group py-2 whitespace-nowrap">
              {{ langService.t().navbar.about }}
              <span class="absolute bottom-0 left-0 w-0 h-[1px] bg-champagne transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a routerLink="/mission" routerLinkActive="text-champagne" class="hover:text-champagne transition-colors duration-300 relative group py-2 whitespace-nowrap">
              {{ langService.t().navbar.mission }}
              <span class="absolute bottom-0 left-0 w-0 h-[1px] bg-champagne transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a routerLink="/vision" routerLinkActive="text-champagne" class="hover:text-champagne transition-colors duration-300 relative group py-2 whitespace-nowrap">
              {{ langService.t().navbar.vision }}
              <span class="absolute bottom-0 left-0 w-0 h-[1px] bg-champagne transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a routerLink="/contact" routerLinkActive="text-champagne" class="hover:text-champagne transition-colors duration-300 relative group py-2 whitespace-nowrap">
              {{ langService.t().navbar.contact }}
              <span class="absolute bottom-0 left-0 w-0 h-[1px] bg-champagne transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a routerLink="/services" routerLinkActive="text-champagne" class="hover:text-champagne transition-colors duration-300 relative group py-2 whitespace-nowrap">
              {{ langService.t().navbar.services }}
              <span class="absolute bottom-0 left-0 w-0 h-[1px] bg-champagne transition-all duration-300 group-hover:w-full"></span>
            </a>
          </div>
        </div>

        <!-- Right Side Desktop -->
        <div class="hidden lg:flex items-center gap-4 xl:gap-6 flex-shrink-0">
          <!-- Language Selector -->
          <div class="flex items-center gap-3 pr-4 xl:pr-6 border-r border-champagne/10">
            <span class="material-symbols-outlined text-sm text-gold-muted/50">language</span>
            <div class="flex items-center gap-2 text-[10px] uppercase tracking-[0.15em] font-bold">
              <button 
                (click)="setLang('EN')"
                [ngClass]="{'text-champagne': langService.currentLang() === 'EN', 'text-gold-muted/40': langService.currentLang() !== 'EN'}"
                class="hover:text-white transition-colors">EN</button>
              <span class="w-[1px] h-3 bg-champagne/20"></span>
              <button 
                (click)="setLang('TR')"
                [ngClass]="{'text-champagne': langService.currentLang() === 'TR', 'text-gold-muted/40': langService.currentLang() !== 'TR'}"
                class="hover:text-white transition-colors">TR</button>
            </div>
          </div>
          <!-- CTA Button -->
          <a routerLink="/contact" class="border border-champagne/40 text-champagne hover:bg-champagne hover:text-obsidian-deep px-4 xl:px-6 py-2.5 text-[9px] uppercase tracking-[0.15em] font-bold transition-all duration-500 whitespace-nowrap">
            {{ langService.t().navbar.btn }}
          </a>
        </div>

        <!-- Mobile Menu Toggle -->
        <button 
          class="lg:hidden relative z-[101] w-10 h-10 flex items-center justify-center text-champagne focus:outline-none" 
          (click)="toggleMobileMenu()"
          aria-label="Toggle Menu">
          <span class="material-symbols-outlined text-2xl">
            {{ isMobileMenuOpen() ? 'close' : 'menu' }}
          </span>
        </button>
      </div>
    </nav>

    <!-- MOBILE MENU OVERLAY -->
    <div 
      class="fixed inset-0 z-[95] bg-background-dark/95 backdrop-blur-3xl transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] lg:hidden"
      [class.opacity-100]="isMobileMenuOpen()"
      [class.opacity-0]="!isMobileMenuOpen()"
      [class.pointer-events-auto]="isMobileMenuOpen()"
      [class.pointer-events-none]="!isMobileMenuOpen()">
         
      <!-- Background Texture -->
      <div class="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/grid-noise.png')] opacity-5 pointer-events-none"></div>

      <!-- Menu Content - pt değerini navbar yüksekliğine göre ayarladık -->
      <div 
        class="h-full flex flex-col pt-32 sm:pt-36 px-6 sm:px-8 overflow-y-auto pb-10 transition-transform duration-500"
        [class.translate-y-0]="isMobileMenuOpen()"
        [class.-translate-y-4]="!isMobileMenuOpen()">
        
        <!-- Navigation Links -->
        <div class="flex flex-col gap-4">
          <a routerLink="/home" (click)="closeMobileMenu()" class="group flex items-center gap-4 border-b border-white/5 pb-4">
            <span class="text-[10px] text-champagne/40 font-mono group-hover:text-champagne transition-colors">01</span>
            <span class="text-lg sm:text-xl font-light text-white tracking-[0.15em] uppercase group-hover:translate-x-2 transition-transform duration-300">{{ langService.t().navbar.home }}</span>
          </a>
          <a routerLink="/about" (click)="closeMobileMenu()" class="group flex items-center gap-4 border-b border-white/5 pb-4">
            <span class="text-[10px] text-champagne/40 font-mono group-hover:text-champagne transition-colors">02</span>
            <span class="text-lg sm:text-xl font-light text-white tracking-[0.15em] uppercase group-hover:translate-x-2 transition-transform duration-300">{{ langService.t().navbar.about }}</span>
          </a>
          <a routerLink="/mission" (click)="closeMobileMenu()" class="group flex items-center gap-4 border-b border-white/5 pb-4">
            <span class="text-[10px] text-champagne/40 font-mono group-hover:text-champagne transition-colors">03</span>
            <span class="text-lg sm:text-xl font-light text-white tracking-[0.15em] uppercase group-hover:translate-x-2 transition-transform duration-300">{{ langService.t().navbar.mission }}</span>
          </a>
          <a routerLink="/vision" (click)="closeMobileMenu()" class="group flex items-center gap-4 border-b border-white/5 pb-4">
            <span class="text-[10px] text-champagne/40 font-mono group-hover:text-champagne transition-colors">04</span>
            <span class="text-lg sm:text-xl font-light text-white tracking-[0.15em] uppercase group-hover:translate-x-2 transition-transform duration-300">{{ langService.t().navbar.vision }}</span>
          </a>
          <a routerLink="/contact" (click)="closeMobileMenu()" class="group flex items-center gap-4 border-b border-white/5 pb-4">
            <span class="text-[10px] text-champagne/40 font-mono group-hover:text-champagne transition-colors">05</span>
            <span class="text-lg sm:text-xl font-light text-white tracking-[0.15em] uppercase group-hover:translate-x-2 transition-transform duration-300">{{ langService.t().navbar.contact }}</span>
          </a>
          <a routerLink="/services" (click)="closeMobileMenu()" class="group flex items-center gap-4 border-b border-white/5 pb-4">
            <span class="text-[10px] text-champagne/40 font-mono group-hover:text-champagne transition-colors">06</span>
            <span class="text-lg sm:text-xl font-light text-white tracking-[0.15em] uppercase group-hover:translate-x-2 transition-transform duration-300">{{ langService.t().navbar.services }}</span>
          </a>
        </div>

        <!-- Footer Actions -->
        <div class="mt-12 pt-8 flex flex-col gap-6">
          <!-- Language Selector -->
          <div class="flex items-center gap-4">
            <span class="text-[10px] uppercase tracking-widest text-gold-muted/50">Language:</span>
            <div class="flex gap-3">
              <button 
                (click)="setLang('EN')" 
                [class.text-champagne]="langService.currentLang() === 'EN'" 
                [class.font-bold]="langService.currentLang() === 'EN'"
                class="text-white/60 text-sm tracking-widest hover:text-white transition-colors">EN</button>
              <div class="w-px h-4 bg-white/20"></div>
              <button 
                (click)="setLang('TR')" 
                [class.text-champagne]="langService.currentLang() === 'TR'" 
                [class.font-bold]="langService.currentLang() === 'TR'"
                class="text-white/60 text-sm tracking-widest hover:text-white transition-colors">TR</button>
            </div>
          </div>

          <!-- CTA Button -->
          <a routerLink="/contact" (click)="closeMobileMenu()" class="w-full max-w-xs border border-champagne/30 py-3.5 text-center hover:bg-champagne/10 transition-all">
            <span class="text-[10px] font-bold uppercase tracking-[0.2em] text-champagne">{{ langService.t().navbar.btn }}</span>
          </a>

          <!-- Status -->
          <div class="pt-6 border-t border-white/5">
            <p class="text-[9px] uppercase tracking-[0.15em] text-gold-muted/30 font-mono text-center">
              System Status: Online
            </p>
          </div>
        </div>
      </div>
    </div>
  `
})
export class NavbarComponent {
  langService = inject(LanguageService);
  bgTransparent = signal(false);
  isHidden = signal(false);
  isMobileMenuOpen = signal(false);

  private lastScrollY = 0;

  constructor() {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', () => {
        const currentY = window.scrollY;
        this.bgTransparent.set(currentY > 50);
        if (currentY > this.lastScrollY && currentY > 100) {
          if (!this.isMobileMenuOpen()) {
            this.isHidden.set(true);
          }
        } else {
          this.isHidden.set(false);
        }
        this.lastScrollY = currentY;
      });
    }
  }

  toggleMobileMenu() {
    this.isMobileMenuOpen.update(v => {
      const newState = !v;
      if (typeof document !== 'undefined') {
        document.body.style.overflow = newState ? 'hidden' : '';
      }
      return newState;
    });
  }

  closeMobileMenu() {
    this.isMobileMenuOpen.set(false);
    if (typeof document !== 'undefined') {
      document.body.style.overflow = '';
    }
  }

  setLang(lang: Lang) {
    this.langService.setLang(lang);
  }
}
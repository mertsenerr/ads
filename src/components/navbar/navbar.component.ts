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
            
            <!-- Anasayfa -->
            <a routerLink="/home" routerLinkActive="text-champagne" [routerLinkActiveOptions]="{exact: true}" class="hover:text-champagne transition-colors duration-300 relative group py-2 whitespace-nowrap">
              {{ langService.t().navbar.home }}
              <span class="absolute bottom-0 left-0 w-0 h-[1px] bg-champagne transition-all duration-300 group-hover:w-full"></span>
            </a>

            <!-- Kurumsal (just the trigger button, no dropdown here) -->
            <button class="hover:text-champagne transition-colors duration-300 relative py-2 whitespace-nowrap flex items-center gap-1.5 uppercase"
                    [class.text-champagne]="isDropdownOpen()"
                    (mouseenter)="openMegaMenu()"
                    (click)="toggleMegaMenu()">
              {{ langService.t().navbar.corporate }}
              <span class="material-symbols-outlined text-[14px] transition-transform duration-300"
                    [class.rotate-180]="isDropdownOpen()">expand_more</span>
              <span class="absolute bottom-0 left-0 h-[1px] bg-champagne transition-all duration-300"
                    [class.w-full]="isDropdownOpen()" [class.w-0]="!isDropdownOpen()"></span>
            </button>

            <!-- Hizmetler -->
            <a routerLink="/services" routerLinkActive="text-champagne" class="hover:text-champagne transition-colors duration-300 relative group py-2 whitespace-nowrap"
               (mouseenter)="closeMegaMenu()">
              {{ langService.t().navbar.services }}
              <span class="absolute bottom-0 left-0 w-0 h-[1px] bg-champagne transition-all duration-300 group-hover:w-full"></span>
            </a>

            <!-- Referanslar -->
            <a routerLink="/references" routerLinkActive="text-champagne" class="hover:text-champagne transition-colors duration-300 relative group py-2 whitespace-nowrap"
               (mouseenter)="closeMegaMenu()">
              {{ langService.t().navbar.references }}
              <span class="absolute bottom-0 left-0 w-0 h-[1px] bg-champagne transition-all duration-300 group-hover:w-full"></span>
            </a>

            <!-- İletişim -->
            <a routerLink="/contact" routerLinkActive="text-champagne" class="hover:text-champagne transition-colors duration-300 relative group py-2 whitespace-nowrap"
               (mouseenter)="closeMegaMenu()">
              {{ langService.t().navbar.contact }}
              <span class="absolute bottom-0 left-0 w-0 h-[1px] bg-champagne transition-all duration-300 group-hover:w-full"></span>
            </a>
          </div>
        </div>

        <!-- Right Side Desktop -->
        <div class="hidden lg:flex items-center gap-4 xl:gap-6 flex-shrink-0">
          <div class="flex items-center gap-3 pr-4 xl:pr-6 border-r border-champagne/10">
            <span class="material-symbols-outlined text-sm text-gold-muted/50">language</span>
            <div class="flex items-center gap-2 text-[10px] uppercase tracking-[0.15em] font-bold">
              <button (click)="setLang('EN')" [ngClass]="{'text-champagne': langService.currentLang() === 'EN', 'text-gold-muted/40': langService.currentLang() !== 'EN'}" class="hover:text-white transition-colors">EN</button>
              <span class="w-[1px] h-3 bg-champagne/20"></span>
              <button (click)="setLang('TR')" [ngClass]="{'text-champagne': langService.currentLang() === 'TR', 'text-gold-muted/40': langService.currentLang() !== 'TR'}" class="hover:text-white transition-colors">TR</button>
            </div>
          </div>
          <a routerLink="/contact" class="border border-champagne/40 text-champagne hover:bg-champagne hover:text-obsidian-deep px-4 xl:px-6 py-2.5 text-[9px] uppercase tracking-[0.15em] font-bold transition-all duration-500 whitespace-nowrap">
            {{ langService.t().navbar.btn }}
          </a>
        </div>

        <!-- Mobile Menu Toggle -->
        <button class="lg:hidden relative z-[101] w-10 h-10 flex items-center justify-center text-champagne focus:outline-none" (click)="toggleMobileMenu()" aria-label="Toggle Menu">
          <span class="material-symbols-outlined text-2xl">{{ isMobileMenuOpen() ? 'close' : 'menu' }}</span>
        </button>
      </div>
    </nav>

      <!-- MEGA MENU - OUTSIDE nav, full width fixed overlay -->
      <div 
        class="fixed left-0 w-full z-[99] hidden lg:block transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]"
        [style.top.px]="megaMenuTop()"
        [class.opacity-100]="isDropdownOpen()"
        [class.opacity-0]="!isDropdownOpen()"
        [class.translate-y-0]="isDropdownOpen()"
        [class.-translate-y-4]="!isDropdownOpen()"
        [class.pointer-events-auto]="isDropdownOpen()"
        [class.pointer-events-none]="!isDropdownOpen()"
        (mouseenter)="isDropdownOpen.set(true)"
        (mouseleave)="closeMegaMenu()">
        
        <div class="bg-[#080c14]/[0.98] backdrop-blur-3xl border-b border-champagne/[0.08] shadow-[0_40px_100px_rgba(0,0,0,0.8)]">
          <div class="max-w-[1500px] mx-auto px-10 py-8">
            <div class="grid grid-cols-12 gap-6" style="height: 320px;">
              
              <!-- Left: Navigation Cards -->
              <div class="col-span-7 flex flex-col h-full">
                
                <!-- Section Label -->
                <div class="flex items-center gap-3 mb-5">
                  <div class="w-6 h-[1px] bg-gradient-to-r from-champagne/60 to-transparent"></div>
                  <span class="text-[8px] uppercase tracking-[0.5em] text-champagne/50 font-semibold">{{ langService.t().navbar.corporate }}</span>
                </div>

                <!-- Cards -->
                <div class="grid grid-cols-3 gap-4 flex-1">
                  
                  <!-- Hakkımızda -->
                  <a routerLink="/about" (click)="closeMegaMenu()" 
                    class="group relative overflow-hidden bg-white/[0.02] border border-white/[0.05] hover:border-champagne/30 transition-all duration-500 flex flex-col"
                    style="clip-path: polygon(0 0, 100% 0, 100% calc(100% - 16px), calc(100% - 16px) 100%, 0 100%);">
                    <!-- Top Accent Line -->
                    <div class="absolute top-0 left-0 w-0 h-[2px] bg-gradient-to-r from-champagne via-champagne/60 to-transparent group-hover:w-full transition-all duration-700"></div>
                    <!-- Hover BG -->
                    <div class="absolute inset-0 bg-gradient-to-br from-champagne/[0.06] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                    
                    <div class="relative z-10 p-6 flex flex-col flex-1">
                      <!-- Icon + Number -->
                      <div class="flex items-center justify-between mb-5">
                        <div class="w-10 h-10 border border-champagne/15 bg-champagne/[0.04] flex items-center justify-center group-hover:border-champagne/40 group-hover:bg-champagne/10 transition-all duration-500">
                          <span class="material-symbols-outlined text-champagne/60 group-hover:text-champagne text-lg transition-colors duration-500">apartment</span>
                        </div>
                        <span class="text-[9px] tracking-[0.3em] text-white/10 font-mono group-hover:text-champagne/30 transition-colors duration-500">01</span>
                      </div>
                      
                      <!-- Title -->
                      <h4 class="text-sm font-bold text-white/90 mb-2 tracking-wide uppercase group-hover:text-white transition-colors duration-300">{{ langService.t().navbar.about }}</h4>
                      
                      <!-- Description -->
                      <p class="text-[10px] text-white/25 leading-[1.8] font-light group-hover:text-white/45 transition-colors duration-500 flex-1">{{ langService.t().megaMenu.aboutDesc }}</p>
                      
                      <!-- Arrow -->
                      <div class="flex items-center gap-2 mt-4 pt-3 border-t border-white/[0.03] group-hover:border-champagne/10 transition-colors duration-500">
                        <span class="w-5 h-[1px] bg-champagne/0 group-hover:bg-champagne/40 transition-all duration-500"></span>
                        <span class="material-symbols-outlined text-champagne/0 group-hover:text-champagne/60 text-xs transition-all duration-500 group-hover:translate-x-1">arrow_forward</span>
                      </div>
                    </div>
                    
                    <!-- Corner Cut Visual -->
                    <div class="absolute bottom-0 right-0 w-4 h-4 border-t border-l border-champagne/0 group-hover:border-champagne/20 transition-all duration-500" style="transform: rotate(45deg) translate(30%, 30%);"></div>
                  </a>

                  <!-- Misyon -->
                  <a routerLink="/mission" (click)="closeMegaMenu()" 
                    class="group relative overflow-hidden bg-white/[0.02] border border-white/[0.05] hover:border-champagne/30 transition-all duration-500 flex flex-col"
                    style="clip-path: polygon(0 0, 100% 0, 100% calc(100% - 16px), calc(100% - 16px) 100%, 0 100%);">
                    <div class="absolute top-0 left-0 w-0 h-[2px] bg-gradient-to-r from-champagne via-champagne/60 to-transparent group-hover:w-full transition-all duration-700 delay-75"></div>
                    <div class="absolute inset-0 bg-gradient-to-br from-champagne/[0.06] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                    
                    <div class="relative z-10 p-6 flex flex-col flex-1">
                      <div class="flex items-center justify-between mb-5">
                        <div class="w-10 h-10 border border-champagne/15 bg-champagne/[0.04] flex items-center justify-center group-hover:border-champagne/40 group-hover:bg-champagne/10 transition-all duration-500">
                          <span class="material-symbols-outlined text-champagne/60 group-hover:text-champagne text-lg transition-colors duration-500">flag</span>
                        </div>
                        <span class="text-[9px] tracking-[0.3em] text-white/10 font-mono group-hover:text-champagne/30 transition-colors duration-500">02</span>
                      </div>
                      
                      <h4 class="text-sm font-bold text-white/90 mb-2 tracking-wide uppercase group-hover:text-white transition-colors duration-300">{{ langService.t().navbar.mission }}</h4>
                      <p class="text-[10px] text-white/25 leading-[1.8] font-light group-hover:text-white/45 transition-colors duration-500 flex-1">{{ langService.t().megaMenu.missionDesc }}</p>
                      
                      <div class="flex items-center gap-2 mt-4 pt-3 border-t border-white/[0.03] group-hover:border-champagne/10 transition-colors duration-500">
                        <span class="w-5 h-[1px] bg-champagne/0 group-hover:bg-champagne/40 transition-all duration-500"></span>
                        <span class="material-symbols-outlined text-champagne/0 group-hover:text-champagne/60 text-xs transition-all duration-500 group-hover:translate-x-1">arrow_forward</span>
                      </div>
                    </div>
                    <div class="absolute bottom-0 right-0 w-4 h-4 border-t border-l border-champagne/0 group-hover:border-champagne/20 transition-all duration-500" style="transform: rotate(45deg) translate(30%, 30%);"></div>
                  </a>

                  <!-- Vizyon -->
                  <a routerLink="/vision" (click)="closeMegaMenu()" 
                    class="group relative overflow-hidden bg-white/[0.02] border border-white/[0.05] hover:border-champagne/30 transition-all duration-500 flex flex-col"
                    style="clip-path: polygon(0 0, 100% 0, 100% calc(100% - 16px), calc(100% - 16px) 100%, 0 100%);">
                    <div class="absolute top-0 left-0 w-0 h-[2px] bg-gradient-to-r from-champagne via-champagne/60 to-transparent group-hover:w-full transition-all duration-700 delay-150"></div>
                    <div class="absolute inset-0 bg-gradient-to-br from-champagne/[0.06] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                    
                    <div class="relative z-10 p-6 flex flex-col flex-1">
                      <div class="flex items-center justify-between mb-5">
                        <div class="w-10 h-10 border border-champagne/15 bg-champagne/[0.04] flex items-center justify-center group-hover:border-champagne/40 group-hover:bg-champagne/10 transition-all duration-500">
                          <span class="material-symbols-outlined text-champagne/60 group-hover:text-champagne text-lg transition-colors duration-500">visibility</span>
                        </div>
                        <span class="text-[9px] tracking-[0.3em] text-white/10 font-mono group-hover:text-champagne/30 transition-colors duration-500">03</span>
                      </div>
                      
                      <h4 class="text-sm font-bold text-white/90 mb-2 tracking-wide uppercase group-hover:text-white transition-colors duration-300">{{ langService.t().navbar.vision }}</h4>
                      <p class="text-[10px] text-white/25 leading-[1.8] font-light group-hover:text-white/45 transition-colors duration-500 flex-1">{{ langService.t().megaMenu.visionDesc }}</p>
                      
                      <div class="flex items-center gap-2 mt-4 pt-3 border-t border-white/[0.03] group-hover:border-champagne/10 transition-colors duration-500">
                        <span class="w-5 h-[1px] bg-champagne/0 group-hover:bg-champagne/40 transition-all duration-500"></span>
                        <span class="material-symbols-outlined text-champagne/0 group-hover:text-champagne/60 text-xs transition-all duration-500 group-hover:translate-x-1">arrow_forward</span>
                      </div>
                    </div>
                    <div class="absolute bottom-0 right-0 w-4 h-4 border-t border-l border-champagne/0 group-hover:border-champagne/20 transition-all duration-500" style="transform: rotate(45deg) translate(30%, 30%);"></div>
                  </a>
                </div>
              </div>

              <!-- Right: Featured Image -->
              <div class="col-span-5 relative overflow-hidden border border-white/[0.05] group h-full">
                <img 
                  src="https://images.unsplash.com/photo-1553413077-190dd305871c?q=80&w=800&auto=format&fit=crop" 
                  alt="ADS Warehouse Audit" 
                  class="w-full h-full object-cover opacity-50 group-hover:opacity-70 group-hover:scale-105 transition-all duration-[2s] ease-out"
                />
                <div class="absolute inset-0 bg-gradient-to-t from-[#080c14] via-[#080c14]/50 to-transparent"></div>
                <div class="absolute inset-0 bg-gradient-to-r from-[#080c14]/70 to-transparent"></div>
                
                <!-- Scan Line Effect -->
                <div class="absolute inset-0 overflow-hidden opacity-20 pointer-events-none">
                  <div class="absolute left-0 w-full h-[1px] bg-champagne/40 animate-pulse" style="top: 30%;"></div>
                </div>
                
                <div class="absolute bottom-0 left-0 w-full p-8">
                  <div class="flex items-center gap-2.5 mb-3">
                    <span class="w-1.5 h-1.5 bg-champagne rounded-full animate-pulse"></span>
                    <span class="text-[7px] uppercase tracking-[0.5em] text-champagne font-bold">{{ langService.t().megaMenu.badge }}</span>
                  </div>
                  <h3 class="text-xl font-bold text-white mb-2 tracking-tight leading-tight">{{ langService.t().megaMenu.featuredTitle }}</h3>
                  <p class="text-[11px] text-white/40 font-light leading-relaxed max-w-xs">{{ langService.t().megaMenu.featuredDesc }}</p>
                  
                  <div class="flex items-center gap-6 mt-5 pt-4 border-t border-white/[0.08]">
                    <div>
                      <div class="text-lg font-bold text-champagne">10+</div>
                      <div class="text-[6px] uppercase tracking-[0.3em] text-white/25 mt-0.5">{{ langService.t().megaMenu.statYears }}</div>
                    </div>
                    <div class="w-px h-6 bg-white/[0.08]"></div>
                    <div>
                      <div class="text-lg font-bold text-champagne">99.9%</div>
                      <div class="text-[6px] uppercase tracking-[0.3em] text-white/25 mt-0.5">{{ langService.t().megaMenu.statAccuracy }}</div>
                    </div>
                    <div class="w-px h-6 bg-white/[0.08]"></div>
                    <div>
                      <div class="text-lg font-bold text-champagne">120+</div>
                      <div class="text-[6px] uppercase tracking-[0.3em] text-white/25 mt-0.5">{{ langService.t().megaMenu.statTeams }}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    <!-- MOBILE MENU OVERLAY -->
    <div 
      class="fixed inset-0 z-[95] bg-background-dark/95 backdrop-blur-3xl transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] lg:hidden"
      [class.opacity-100]="isMobileMenuOpen()" [class.opacity-0]="!isMobileMenuOpen()"
      [class.pointer-events-auto]="isMobileMenuOpen()" [class.pointer-events-none]="!isMobileMenuOpen()">
         
      <div class="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/grid-noise.png')] opacity-5 pointer-events-none"></div>

      <div class="h-full flex flex-col pt-32 sm:pt-36 px-6 sm:px-8 overflow-y-auto pb-10 transition-transform duration-500"
           [class.translate-y-0]="isMobileMenuOpen()" [class.-translate-y-4]="!isMobileMenuOpen()">
        
        <div class="flex flex-col gap-4">
          <a routerLink="/home" (click)="closeMobileMenu()" class="group flex items-center gap-4 border-b border-white/5 pb-4">
            <span class="text-[10px] text-champagne/40 font-mono group-hover:text-champagne transition-colors">01</span>
            <span class="text-lg sm:text-xl font-light text-white tracking-[0.15em] uppercase group-hover:translate-x-2 transition-transform duration-300">{{ langService.t().navbar.home }}</span>
          </a>
          
          <div class="border-b border-white/5 pb-4">
            <button (click)="toggleMobileDropdown()" class="group flex items-center gap-4 w-full">
              <span class="text-[10px] text-champagne/40 font-mono group-hover:text-champagne transition-colors">02</span>
              <span class="text-lg sm:text-xl font-light text-white tracking-[0.15em] uppercase group-hover:translate-x-2 transition-transform duration-300 flex-1 text-left">{{ langService.t().navbar.corporate }}</span>
              <span class="material-symbols-outlined text-champagne/40 text-lg transition-transform duration-300" [class.rotate-180]="isMobileDropdownOpen()">expand_more</span>
            </button>
            <div class="overflow-hidden transition-all duration-400"
                [class.max-h-0]="!isMobileDropdownOpen()" [class.max-h-48]="isMobileDropdownOpen()"
                [class.opacity-0]="!isMobileDropdownOpen()" [class.opacity-100]="isMobileDropdownOpen()">
              <div class="pl-10 pt-3 flex flex-col gap-3">
                <a routerLink="/about" (click)="closeMobileMenu()" class="text-sm text-gold-muted/60 hover:text-champagne transition-colors uppercase tracking-[0.15em]">{{ langService.t().navbar.about }}</a>
                <a routerLink="/mission" (click)="closeMobileMenu()" class="text-sm text-gold-muted/60 hover:text-champagne transition-colors uppercase tracking-[0.15em]">{{ langService.t().navbar.mission }}</a>
                <a routerLink="/vision" (click)="closeMobileMenu()" class="text-sm text-gold-muted/60 hover:text-champagne transition-colors uppercase tracking-[0.15em]">{{ langService.t().navbar.vision }}</a>
              </div>
            </div>
          </div>

          <a routerLink="/services" (click)="closeMobileMenu()" class="group flex items-center gap-4 border-b border-white/5 pb-4">
            <span class="text-[10px] text-champagne/40 font-mono group-hover:text-champagne transition-colors">03</span>
            <span class="text-lg sm:text-xl font-light text-white tracking-[0.15em] uppercase group-hover:translate-x-2 transition-transform duration-300">{{ langService.t().navbar.services }}</span>
          </a>

          <a routerLink="/references" (click)="closeMobileMenu()" class="group flex items-center gap-4 border-b border-white/5 pb-4">
            <span class="text-[10px] text-champagne/40 font-mono group-hover:text-champagne transition-colors">04</span>
            <span class="text-lg sm:text-xl font-light text-white tracking-[0.15em] uppercase group-hover:translate-x-2 transition-transform duration-300">{{ langService.t().navbar.references }}</span>
          </a>

          <a routerLink="/contact" (click)="closeMobileMenu()" class="group flex items-center gap-4 border-b border-white/5 pb-4">
            <span class="text-[10px] text-champagne/40 font-mono group-hover:text-champagne transition-colors">05</span>
            <span class="text-lg sm:text-xl font-light text-white tracking-[0.15em] uppercase group-hover:translate-x-2 transition-transform duration-300">{{ langService.t().navbar.contact }}</span>
          </a>
        </div>

        <div class="mt-12 pt-8 flex flex-col gap-6">
          <div class="flex items-center gap-4">
            <span class="text-[10px] uppercase tracking-widest text-gold-muted/50">Language:</span>
            <div class="flex gap-3">
              <button (click)="setLang('EN')" [class.text-champagne]="langService.currentLang() === 'EN'" [class.font-bold]="langService.currentLang() === 'EN'" class="text-white/60 text-sm tracking-widest hover:text-white transition-colors">EN</button>
              <div class="w-px h-4 bg-white/20"></div>
              <button (click)="setLang('TR')" [class.text-champagne]="langService.currentLang() === 'TR'" [class.font-bold]="langService.currentLang() === 'TR'" class="text-white/60 text-sm tracking-widest hover:text-white transition-colors">TR</button>
            </div>
          </div>
          <a routerLink="/contact" (click)="closeMobileMenu()" class="w-full max-w-xs border border-champagne/30 py-3.5 text-center hover:bg-champagne/10 transition-all">
            <span class="text-[10px] font-bold uppercase tracking-[0.2em] text-champagne">{{ langService.t().navbar.btn }}</span>
          </a>
          <div class="pt-6 border-t border-white/5">
            <p class="text-[9px] uppercase tracking-[0.15em] text-gold-muted/30 font-mono text-center">System Status: Online</p>
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
  isDropdownOpen = signal(false);
  isMobileDropdownOpen = signal(false);
  megaMenuTop = signal(80);

  private lastScrollY = 0;

  constructor() {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', () => {
        const currentY = window.scrollY;
        this.bgTransparent.set(currentY > 50);
        if (currentY > this.lastScrollY && currentY > 100) {
          if (!this.isMobileMenuOpen()) {
            this.isHidden.set(true);
            this.closeMegaMenu();
          }
        } else {
          this.isHidden.set(false);
        }
        this.lastScrollY = currentY;
      });
    }
  }

  openMegaMenu() {
    this.isDropdownOpen.set(true);
  }

  closeMegaMenu() {
    this.isDropdownOpen.set(false);
  }

  toggleMegaMenu() {
    this.isDropdownOpen.update(v => !v);
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
    this.isMobileDropdownOpen.set(false);
    if (typeof document !== 'undefined') {
      document.body.style.overflow = '';
    }
  }

  setLang(lang: Lang) {
    this.langService.setLang(lang);
  }

  toggleMobileDropdown() {
    this.isMobileDropdownOpen.update(v => !v);
  }
}
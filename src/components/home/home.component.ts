import { Component, ChangeDetectionStrategy, inject, ViewChild, ElementRef, AfterViewInit, OnDestroy, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroComponent } from '../hero/hero.component';
import { FeaturesComponent } from '../features/features.component';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    HeroComponent,
    FeaturesComponent
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <app-hero />
    
    <!-- SECTION 1: Continuous Infinite Slider -->
    <section class="py-24 bg-background-dark border-y border-champagne/10 overflow-hidden relative">
        <!-- Subtle Vignette -->
        <div class="absolute inset-0 bg-gradient-to-r from-background-dark via-transparent to-background-dark z-20 pointer-events-none"></div>
        
        <div class="mb-16 text-center relative z-20">
             <span class="text-[9px] uppercase tracking-[0.5em] text-champagne/60 font-medium animate-pulse">{{ langService.t().homeExtra.galleryTitle }}</span>
        </div>

        <div class="flex overflow-hidden relative w-full">
             <!-- Loop 1 -->
             <div class="flex flex-shrink-0 animate-marquee gap-20 whitespace-nowrap min-w-full pr-20">
                @for (item of galleryItems; track item) {
                   <div class="relative w-[450px] h-[320px] flex-shrink-0 overflow-hidden border border-champagne/10 group cursor-crosshair transition-all duration-700 hover:border-champagne/60 shadow-2xl bg-black">
                       <img [src]="item.img" class="w-full h-full object-cover grayscale brightness-[0.5] group-hover:grayscale-0 group-hover:brightness-100 group-hover:scale-110 transition-all duration-[1s] ease-out" [alt]="item.title">
                       
                       <!-- Gradient Overlay -->
                       <div class="absolute inset-0 bg-gradient-to-t from-background-dark via-transparent to-transparent opacity-90 group-hover:opacity-40 transition-opacity duration-500"></div>
                       
                       <!-- Hover Content -->
                       <div class="absolute bottom-0 left-0 w-full p-8 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                           <div class="flex items-center gap-3 mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                                <span class="w-2 h-2 bg-champagne rounded-full animate-pulse"></span>
                                <span class="text-[8px] uppercase tracking-widest text-champagne font-bold">Zone Verified</span>
                           </div>
                           <h4 class="text-xl font-display font-bold text-white mb-1 drop-shadow-md whitespace-normal">{{ item.title }}</h4>
                           <p class="text-[9px] uppercase tracking-[0.3em] text-gold-muted/80">{{ item.location }}</p>
                       </div>
                   </div>
                }
             </div>
             <!-- Loop 2 (Clone) -->
             <div class="flex flex-shrink-0 animate-marquee gap-20 whitespace-nowrap min-w-full pr-20" aria-hidden="true">
                 @for (item of galleryItems; track item) {
                   <div class="relative w-[450px] h-[320px] flex-shrink-0 overflow-hidden border border-champagne/10 group cursor-crosshair transition-all duration-700 hover:border-champagne/60 shadow-2xl bg-black">
                       <img [src]="item.img" class="w-full h-full object-cover grayscale brightness-[0.5] group-hover:grayscale-0 group-hover:brightness-100 group-hover:scale-110 transition-all duration-[1s] ease-out" [alt]="item.title">
                       
                       <div class="absolute inset-0 bg-gradient-to-t from-background-dark via-transparent to-transparent opacity-90 group-hover:opacity-40 transition-opacity duration-500"></div>
                       
                       <div class="absolute bottom-0 left-0 w-full p-8 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                           <div class="flex items-center gap-3 mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                                <span class="w-2 h-2 bg-champagne rounded-full animate-pulse"></span>
                                <span class="text-[8px] uppercase tracking-widest text-champagne font-bold">Zone Verified</span>
                           </div>
                           <h4 class="text-xl font-display font-bold text-white mb-1 drop-shadow-md whitespace-normal">{{ item.title }}</h4>
                           <p class="text-[9px] uppercase tracking-[0.3em] text-gold-muted/80">{{ item.location }}</p>
                       </div>
                   </div>
                }
             </div>
        </div>
    </section>

    <app-features />

    <!-- SECTION 2: The Art of Counting — Sticky Scroll -->
    <div class="sticky-scroll-wrapper relative" data-sticky-id="art-section">
        <div class="sticky top-0 min-h-screen overflow-hidden">
            <section class="min-h-screen bg-obsidian-deep relative overflow-hidden flex items-center">
                <!-- Background -->
                <div class="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-5 pointer-events-none"></div>
                <div class="absolute right-0 top-0 w-1/3 h-full bg-gradient-to-l from-champagne/5 to-transparent pointer-events-none"></div>

                <div class="max-w-7xl mx-auto px-6 relative z-10 w-full py-20">
                    <div class="grid grid-cols-1 lg:grid-cols-2 gap-32 items-center">
                        
                        <!-- Left -->
                        <div class="order-2 lg:order-1">
                            <div class="sticky-child flex items-center gap-4 mb-10" data-order="0">
                                <span class="h-px w-12 bg-champagne"></span>
                                <span class="text-[10px] uppercase tracking-[0.4em] text-champagne font-bold">Audit Methodology</span>
                            </div>
                            
                            <div class="sticky-child mb-2" data-order="1">
                                <span class="block text-6xl md:text-8xl font-display font-bold text-platinum tracking-tighter leading-none">{{ langService.t().homeExtra.artTitleLine1 }}</span>
                            </div>
                            <div class="sticky-child mb-10" data-order="2">
                                <span class="block text-6xl md:text-8xl font-display font-bold text-transparent text-stroke-champagne tracking-tighter leading-none">{{ langService.t().homeExtra.artTitleLine2 }}</span>
                            </div>
                            
                            <p class="sticky-child text-gold-muted/70 text-lg font-light leading-relaxed mb-16 border-l border-champagne/20 pl-8 max-w-lg" data-order="3">
                                {{ langService.t().homeExtra.artDescription }}
                            </p>

                            <div class="flex flex-col gap-8">
                                <div class="sticky-child flex items-center justify-between border-b border-white/5 pb-6 group cursor-pointer hover:border-champagne/30 transition-[border] duration-300" data-order="4">
                                    <span class="text-base font-light text-white group-hover:translate-x-2 transition-transform">01. {{ langService.t().homeExtra.artItem1 }}</span>
                                    <span class="material-symbols-outlined text-champagne opacity-0 group-hover:opacity-100 transition-opacity">check_circle</span>
                                </div>
                                <div class="sticky-child flex items-center justify-between border-b border-white/5 pb-6 group cursor-pointer hover:border-champagne/30 transition-[border] duration-300" data-order="5">
                                    <span class="text-base font-light text-white group-hover:translate-x-2 transition-transform">02. {{ langService.t().homeExtra.artItem2 }}</span>
                                    <span class="material-symbols-outlined text-champagne opacity-0 group-hover:opacity-100 transition-opacity">visibility_off</span>
                                </div>
                                <div class="sticky-child flex items-center justify-between border-b border-white/5 pb-6 group cursor-pointer hover:border-champagne/30 transition-[border] duration-300" data-order="6">
                                    <span class="text-base font-light text-white group-hover:translate-x-2 transition-transform">03. {{ langService.t().homeExtra.artItem3 }}</span>
                                    <span class="material-symbols-outlined text-champagne opacity-0 group-hover:opacity-100 transition-opacity">analytics</span>
                                </div>
                            </div>
                        </div>

                        <!-- Right: Visual -->
                        <div class="order-1 lg:order-2 relative group sticky-child" data-order="1">
                            <!-- Elegant Frame -->
                            <div class="absolute -inset-5 z-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-all duration-1000 ease-out">
                                 <div class="absolute top-0 left-0 w-0 group-hover:w-10 h-[1px] bg-gradient-to-r from-champagne/80 to-transparent transition-all duration-700 delay-100 ease-out"></div>
                                 <div class="absolute top-0 left-0 h-0 group-hover:h-10 w-[1px] bg-gradient-to-b from-champagne/80 to-transparent transition-all duration-700 delay-100 ease-out"></div>
                                 <div class="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center gap-2.5 opacity-0 group-hover:opacity-100 transition-all duration-700 delay-500 ease-out whitespace-nowrap">
                                     <span class="material-symbols-outlined text-champagne text-sm">verified</span>
                                     <span class="text-[9px] uppercase tracking-[0.3em] font-medium text-champagne/90">{{ langService.t().homeExtra.hud.badge }}</span>
                                 </div>
                                 <div class="absolute top-0 right-0 w-0 group-hover:w-10 h-[1px] bg-gradient-to-l from-champagne/80 to-transparent transition-all duration-700 delay-200 ease-out"></div>
                                 <div class="absolute top-0 right-0 h-0 group-hover:h-10 w-[1px] bg-gradient-to-b from-champagne/80 to-transparent transition-all duration-700 delay-200 ease-out"></div>
                                 <div class="absolute bottom-0 left-0 w-0 group-hover:w-10 h-[1px] bg-gradient-to-r from-champagne/80 to-transparent transition-all duration-700 delay-300 ease-out"></div>
                                 <div class="absolute bottom-0 left-0 h-0 group-hover:h-10 w-[1px] bg-gradient-to-t from-champagne/80 to-transparent transition-all duration-700 delay-300 ease-out"></div>
                                 <div class="absolute bottom-0 right-0 w-0 group-hover:w-10 h-[1px] bg-gradient-to-l from-champagne/80 to-transparent transition-all duration-700 delay-[400ms] ease-out"></div>
                                 <div class="absolute bottom-0 right-0 h-0 group-hover:h-10 w-[1px] bg-gradient-to-t from-champagne/80 to-transparent transition-all duration-700 delay-[400ms] ease-out"></div>
                                 <div class="absolute top-0 left-10 right-10 h-[1px] bg-champagne/0 group-hover:bg-champagne/[0.08] transition-all duration-1000 delay-500 ease-out"></div>
                                 <div class="absolute bottom-0 left-10 right-10 h-[1px] bg-champagne/0 group-hover:bg-champagne/[0.08] transition-all duration-1000 delay-500 ease-out"></div>
                                 <div class="absolute left-0 top-10 bottom-10 w-[1px] bg-champagne/0 group-hover:bg-champagne/[0.08] transition-all duration-1000 delay-500 ease-out"></div>
                                 <div class="absolute right-0 top-10 bottom-10 w-[1px] bg-champagne/0 group-hover:bg-champagne/[0.08] transition-all duration-1000 delay-500 ease-out"></div>
                            </div>
                            <div class="absolute -inset-10 bg-champagne/0 group-hover:bg-champagne/[0.03] rounded-full blur-3xl transition-all duration-1000 pointer-events-none"></div>
                            <div class="relative z-10 aspect-[4/5] bg-obsidian-matte border border-white/5 group-hover:border-white/[0.15] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.7)] group-hover:shadow-[0_30px_80px_rgba(0,0,0,0.8)] transition-all duration-1000 group-hover:translate-y-[-5px]">
                                 <img src="https://images.unsplash.com/photo-1553413077-190dd305871c?q=80&w=2070&auto=format&fit=crop" class="w-full h-full object-cover opacity-95 group-hover:scale-105 transition-all duration-[2s] ease-out" alt="Warehouse Inventory Shelves" />
                                 <div class="absolute inset-0 bg-black/10 group-hover:bg-black/5 transition-colors duration-1000"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    </div>

    <!-- SECTION 3: TOTAL VISIBILITY — Sticky Scroll -->
    <div class="sticky-scroll-wrapper relative" data-sticky-id="visibility-section">
        <div class="sticky top-0 min-h-screen overflow-hidden">
            <section class="min-h-screen relative overflow-hidden bg-[#030712] flex items-center">
                
                <!-- Background layers -->
                <div class="absolute inset-0 z-0">
                     <img src="https://images.pexels.com/photos/4481259/pexels-photo-4481259.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" class="w-full h-full object-cover opacity-40" alt="Background">
                </div>
                <div class="absolute inset-0 z-[1]">
                     <video #videoPlayer autoplay loop muted playsinline webkit-playsinline class="w-full h-full object-cover opacity-50" poster="https://images.pexels.com/videos/4482933/free-video-4482933.jpg?auto=compress&cs=tinysrgb&dpr=1&w=1920">
                        <source src="https://videos.pexels.com/video-files/4482933/4482933-hd_1920_1080_25fps.mp4" type="video/mp4">
                     </video>
                </div>
                <div class="absolute inset-0 z-[2] bg-gradient-to-b from-[#030712] via-black/60 to-[#030712]"></div>
                <div class="absolute inset-0 z-[2] bg-[radial-gradient(ellipse_at_center,transparent_0%,#030712_75%)]"></div>

                <div class="relative z-10 w-full py-20">
                    <div class="max-w-6xl mx-auto px-6 text-center">
                        
                        <!-- Eyebrow -->
                        <div class="sticky-child flex items-center justify-center gap-5 mb-14" data-order="0">
                             <span class="w-16 h-[1px] bg-gradient-to-r from-transparent to-champagne/50"></span>
                             <span class="text-champagne text-[9px] uppercase tracking-[0.5em] font-medium">{{ langService.t().totalVisibility.tag }}</span>
                             <span class="w-16 h-[1px] bg-gradient-to-l from-transparent to-champagne/50"></span>
                        </div>

                        <!-- Title line 1 -->
                        <div class="sticky-child mb-2 md:mb-4" data-order="1">
                            <span class="block font-display font-black text-white text-5xl sm:text-7xl md:text-[140px] leading-[0.9] tracking-tighter drop-shadow-2xl">{{ langService.t().totalVisibility.title.split(' ')[0] || 'TAM' }}</span>
                        </div>
                        
                        <!-- Title line 2 -->
                        <div class="sticky-child mb-14" data-order="2">
                            <span class="block font-display font-black text-5xl sm:text-7xl md:text-[140px] leading-[0.9] tracking-tighter text-transparent visibility-outline">{{ langService.t().totalVisibility.title.split(' ')[1] || 'GÖRÜNÜRLÜK' }}</span>
                        </div>

                        <!-- Subtitle -->
                        <div class="sticky-child" data-order="3">
                            <div class="w-12 h-[2px] bg-champagne mx-auto mb-8"></div>
                            <p class="text-lg md:text-xl font-light text-white/80 tracking-wide max-w-xl mx-auto mb-24">
                               {{ langService.t().totalVisibility.subtitle }}
                            </p>
                        </div>

                        <!-- Divider -->
                        <div class="sticky-child flex items-center gap-8 mb-16" data-order="4">
                            <div class="flex-1 h-[1px] bg-gradient-to-r from-champagne/30 to-transparent"></div>
                            <span class="text-[9px] uppercase tracking-[0.5em] text-champagne/60 font-medium whitespace-nowrap">Trusted Partners</span>
                            <div class="flex-1 h-[1px] bg-gradient-to-l from-champagne/30 to-transparent"></div>
                        </div>

                        <!-- Brand Grid -->
                        <div class="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
                            @for (brand of brands; track brand.name; let i = $index) {
                                <div class="sticky-child group relative overflow-hidden cursor-pointer bg-white/[0.02] border border-white/[0.06] backdrop-blur-sm hover:bg-white/[0.06] hover:border-champagne/20 transition-[background,border] duration-700"
                                    [attr.data-order]="5 + i"
                                >
                                    <div class="relative h-36 md:h-44 flex flex-col items-center justify-center p-6 transition-transform duration-700 group-hover:scale-[1.02]">
                                        <div class="absolute top-3 right-3 w-0 group-hover:w-5 h-[1px] bg-champagne/40 transition-all duration-500 ease-out"></div>
                                        <div class="absolute top-3 right-3 h-0 group-hover:h-5 w-[1px] bg-champagne/40 transition-all duration-500 ease-out"></div>
                                        <div class="absolute bottom-3 left-3 w-0 group-hover:w-5 h-[1px] bg-champagne/40 transition-all duration-500 delay-100 ease-out"></div>
                                        <div class="absolute bottom-3 left-3 h-0 group-hover:h-5 w-[1px] bg-champagne/40 transition-all duration-500 delay-100 ease-out"></div>
                                        <img [src]="brand.logo" [alt]="brand.name" loading="eager"
                                            class="h-8 md:h-20 w-auto max-w-[75%] object-contain transition-all duration-700 opacity-80 group-hover:opacity-100 group-hover:scale-110"
                                            (error)="brand.hasError = true" [style.display]="brand.hasError ? 'none' : 'block'" />
                                        @if (brand.hasError) {
                                            <span class="text-[11px] uppercase tracking-[0.25em] font-display font-bold text-white/50 group-hover:text-white/90 transition-colors duration-500">{{ brand.name }}</span>
                                        }
                                        <span class="absolute bottom-5 text-[7px] uppercase tracking-[0.4em] text-champagne/0 group-hover:text-champagne/50 translate-y-2 group-hover:translate-y-0 transition-all duration-500 delay-200 font-medium">{{brand.name}}</span>
                                    </div>
                                    <div class="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out bg-gradient-to-r from-transparent via-white/[0.04] to-transparent pointer-events-none"></div>
                                </div>
                            }
                        </div>

                        <!-- Stats + CTA -->
                        <div class="sticky-child mt-20 flex flex-col md:flex-row items-center justify-between gap-10 pt-12 border-t border-white/[0.06]" [attr.data-order]="5 + brands.length">
                            <div class="flex items-center gap-10">
                                <div class="text-center md:text-left">
                                    <div class="text-4xl md:text-5xl font-display font-bold text-white tracking-tighter">10<span class="text-champagne">+</span></div>
                                    <div class="text-[8px] uppercase tracking-[0.4em] text-gold-muted/50 mt-2">Global Clients</div>
                                </div>
                            </div>
                            <button class="group relative px-14 py-5 overflow-hidden bg-transparent border border-champagne/30 hover:border-champagne/60 transition-all duration-700">
                                <div class="absolute bottom-0 left-0 right-0 h-0 group-hover:h-full bg-champagne/10 transition-all duration-500 ease-out"></div>
                                <span class="relative text-[10px] uppercase tracking-[0.4em] font-bold text-champagne/80 group-hover:text-champagne transition-colors duration-500">{{ langService.t().totalVisibility.btn }}</span>
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    </div>
  `,
  styles: [`
    .text-stroke-champagne {
        -webkit-text-stroke: 1px rgba(212, 197, 176, 0.6);
    }
    .visibility-outline {
        -webkit-text-stroke: 1.5px rgba(255, 255, 255, 0.35);
        color: transparent;
    }
    .sticky-child {
        opacity: 0;
        transform: translateY(50px);
        will-change: opacity, transform;
    }
  `]
})
export class HomeComponent implements AfterViewInit, OnDestroy {
  langService = inject(LanguageService);
  
  @ViewChild('videoPlayer') videoPlayer!: ElementRef<HTMLVideoElement>;

  private scrollHandler!: () => void;
  private rafId = 0;
  private ticking = false;

  ngAfterViewInit() {
      // Video autoplay
      if (this.videoPlayer && this.videoPlayer.nativeElement) {
          const vid = this.videoPlayer.nativeElement;
          vid.muted = true; 
          vid.play().catch(err => {
              console.warn('Video autoplay blocked or failed.', err);
          });
      }

      // Sticky scroll animation system
      this.scrollHandler = () => {
          if (!this.ticking) {
              this.rafId = requestAnimationFrame(() => {
                  this.updateStickyScrollSections();
                  this.ticking = false;
              });
              this.ticking = true;
          }
      };

      window.addEventListener('scroll', this.scrollHandler, { passive: true });
      window.addEventListener('resize', this.scrollHandler, { passive: true });
      setTimeout(() => this.updateStickyScrollSections(), 150);
  }

  private updateStickyScrollSections() {
      const wrappers = document.querySelectorAll('.sticky-scroll-wrapper');
      
      wrappers.forEach(wrapper => {
          const el = wrapper as HTMLElement;
          const children = el.querySelectorAll('.sticky-child');
          const totalChildren = children.length;
          if (totalChildren === 0) return;

          // Each child gets a portion of the scroll distance
          const scrollPerChild = 120; // pixels of scroll per child reveal
          const totalScrollNeeded = totalChildren * scrollPerChild;
          
          // Set wrapper height = viewport + scroll space
          el.style.height = (window.innerHeight + totalScrollNeeded) + 'px';

          const rect = el.getBoundingClientRect();
          // How far we've scrolled into this wrapper (0 = just entered, totalScrollNeeded = done)
          const scrolled = -rect.top;
          
          children.forEach((child) => {
              const htmlChild = child as HTMLElement;
              const order = parseInt(htmlChild.dataset['order'] || '0');
              
              // Each child starts revealing at order * scrollPerChild
              const childStart = order * scrollPerChild;
              const childEnd = childStart + scrollPerChild;
              
              let progress = 0;
              if (scrolled >= childEnd) {
                  progress = 1;
              } else if (scrolled > childStart) {
                  progress = (scrolled - childStart) / scrollPerChild;
              }
              
              progress = Math.max(0, Math.min(1, progress));
              
              // Cubic ease-out
              const eased = 1 - Math.pow(1 - progress, 3);
              
              const translateY = (1 - eased) * 50;
              htmlChild.style.opacity = String(eased);
              htmlChild.style.transform = `translateY(${translateY}px)`;
          });
      });
  }

  ngOnDestroy() {
      if (this.scrollHandler) {
          window.removeEventListener('scroll', this.scrollHandler);
          window.removeEventListener('resize', this.scrollHandler);
      }
      if (this.rafId) {
          cancelAnimationFrame(this.rafId);
      }
  }

  // Brands with original color logos
  brands: {name: string, logo: string, hasError?: boolean}[] = [
    { name: 'Watsons', logo: 'assets/logos/watsonslogo.png' },
    { name: 'Mavi', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Mavi_logo.svg/330px-Mavi_logo.svg.png' },
    { name: 'Boyner', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/Boyner_logo.svg/1280px-Boyner_logo.svg.png' }, 
    { name: 'Shell', logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/e/e8/Shell_logo.svg/1024px-Shell_logo.svg.png' },
    { name: 'Migros', logo: 'https://upload.wikimedia.org/wikipedia/commons/0/07/MiGROS_Logo.svg' },
    { name: 'CarrefourSA', logo: 'https://vectorseek.com/wp-content/uploads/2022/04/Carrefour-SA-Logo-Vector.svg-.png' },
    { name: 'BP', logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/d/d2/BP_Helios_logo.svg/800px-BP_Helios_logo.svg.png' }, 
    { name: 'Gratis', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Gratis-logo-big.svg/1280px-Gratis-logo-big.svg.png' } 
  ];

  galleryItems = [
    { img: 'assets/images/shell.jpg', title: 'Shell İstasyonu', location: 'Istanbul, TR' },
    { img: 'assets/images/bp.jpeg', title: 'BP İstasyonu', location: 'Ankara, TR' },
    { img: 'assets/images/opet.jpg', title: 'OPET İstasyonu', location: 'Izmir, TR' },
    { img: 'assets/images/aytemiz.jpg', title: 'Aytemiz İstasyonu', location: 'Bursa, TR' },
    { img: 'assets/images/eczane.webp', title: 'Eczane Sayımı', location: 'Antalya, TR' },
    { img: 'assets/images/levis.webp', title: 'Levi\'s Mağaza', location: 'Istanbul, TR' },
  ];
}
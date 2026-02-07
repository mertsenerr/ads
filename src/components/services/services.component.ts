import {
  Component,
  ChangeDetectionStrategy,
  inject,
  signal,
  OnInit,
  OnDestroy,
  ElementRef,
  ViewChild,
  AfterViewInit,
  PLATFORM_ID,
  Inject
} from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { LanguageService } from '../../services/language.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule, RouterModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="bg-[#0b0f1a] min-h-screen overflow-hidden" #pageRef>

      <!-- ═══════════════════ HERO ═══════════════════ -->
      <section class="relative min-h-[80vh] flex items-end pb-20 md:pb-28 overflow-hidden">
        <!-- Soft ambient light -->
        <div class="absolute top-[-15%] right-[5%] w-[500px] h-[500px] bg-champagne/[0.025] rounded-full blur-[180px] pointer-events-none"></div>
        
        <!-- Vertical grid lines -->
        <div class="absolute inset-0 overflow-hidden pointer-events-none">
          <div class="absolute top-0 left-[20%] w-[1px] h-full bg-gradient-to-b from-transparent via-white/[0.04] to-transparent"></div>
          <div class="absolute top-0 left-[40%] w-[1px] h-full bg-gradient-to-b from-transparent via-white/[0.025] to-transparent"></div>
          <div class="absolute top-0 left-[60%] w-[1px] h-full bg-gradient-to-b from-transparent via-white/[0.04] to-transparent"></div>
          <div class="absolute top-0 left-[80%] w-[1px] h-full bg-gradient-to-b from-transparent via-white/[0.025] to-transparent"></div>
        </div>

        <div class="max-w-[1400px] mx-auto px-6 md:px-10 w-full relative z-10">
          <!-- Breadcrumb -->
          <div class="hero-reveal flex items-center gap-4 mb-12" style="--delay: 0.1s">
            <div class="w-10 h-[1px] bg-champagne/50"></div>
            <span class="text-[9px] uppercase tracking-[0.5em] text-champagne/60 font-medium">{{ langService.t().servicesPage.breadcrumb }}</span>
          </div>

          <!-- Title — single clean slide-up, no loop -->
          <div class="overflow-hidden mb-10">
            <h1 class="hero-reveal text-[clamp(3rem,8vw,7.5rem)] font-display font-black tracking-[-0.03em] leading-[0.88] text-white uppercase" style="--delay: 0.2s">
              {{ langService.t().servicesPage.header }}
            </h1>
          </div>

          <!-- Subtitle + Stats -->
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-end">
            <div class="hero-reveal max-w-lg" style="--delay: 0.4s">
              <p class="text-base md:text-lg text-white/55 font-light leading-[1.8]">
                {{ langService.t().servicesPage.subHeader }}
              </p>
            </div>
            
            <div class="hero-reveal flex items-center gap-10 lg:justify-end" style="--delay: 0.55s">
              <div class="text-center">
                <div class="text-4xl md:text-5xl font-display font-black text-champagne">8</div>
                <div class="text-[8px] uppercase tracking-[0.4em] text-white/30 mt-2">{{ langService.t().servicesPage.statServices }}</div>
              </div>
              <div class="w-[1px] h-12 bg-white/[0.08]"></div>
              <div class="text-center">
                <div class="text-4xl md:text-5xl font-display font-black text-champagne">120+</div>
                <div class="text-[8px] uppercase tracking-[0.4em] text-white/30 mt-2">{{ langService.t().servicesPage.statTeams }}</div>
              </div>
              <div class="w-[1px] h-12 bg-white/[0.08]"></div>
              <div class="text-center">
                <div class="text-4xl md:text-5xl font-display font-black text-champagne">99.9%</div>
                <div class="text-[8px] uppercase tracking-[0.4em] text-white/30 mt-2">{{ langService.t().servicesPage.statAccuracy }}</div>
              </div>
            </div>
          </div>

          <!-- Scroll indicator — static line, no breathing -->
          <div class="hero-reveal mt-16 flex items-center gap-4" style="--delay: 0.7s">
            <div class="w-[1px] h-10 bg-gradient-to-b from-champagne/50 to-transparent"></div>
            <span class="text-[7px] uppercase tracking-[0.5em] text-white/20">Scroll</span>
          </div>
        </div>
      </section>


      <!-- ═══════════════════ FEATURED SERVICES (2) ═══════════════════ -->
      <section class="max-w-[1400px] mx-auto px-6 md:px-10 mb-[1px]">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-[1px]">

          <!-- Service 1 -->
          <div class="scroll-reveal group relative bg-[#0d1120] overflow-hidden cursor-default service-card-featured"
               (mousemove)="onMouseMove($event)">
            <div class="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 glow-follow"></div>
            <div class="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-champagne to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)]"></div>
            
            <div class="relative p-10 md:p-14 flex flex-col min-h-[380px] md:min-h-[420px]">
              <div class="absolute top-8 right-10 text-[80px] md:text-[100px] font-display font-black text-white/[0.02] group-hover:text-champagne/[0.06] transition-colors duration-1000 leading-none select-none">01</div>
              
              <div class="mb-8 relative">
                <div class="w-16 h-16 border border-white/[0.08] group-hover:border-champagne/25 flex items-center justify-center transition-all duration-700 bg-white/[0.02] group-hover:bg-champagne/[0.06]">
                  <span class="material-symbols-outlined text-white/40 group-hover:text-champagne text-2xl transition-all duration-700 group-hover:scale-110">event_repeat</span>
                </div>
                <div class="absolute -bottom-3 -right-3 w-6 h-6 border-r border-b border-champagne/0 group-hover:border-champagne/20 transition-all duration-700"></div>
              </div>

              <h3 class="text-2xl md:text-3xl font-bold text-white group-hover:text-white mb-4 tracking-tight transition-all duration-500 group-hover:translate-x-1">
                {{ langService.t().servicesPage.service1.title }}
              </h3>
              <p class="text-sm text-white/40 group-hover:text-white/60 leading-[2] font-light transition-all duration-700 max-w-sm">
                {{ langService.t().servicesPage.service1.desc }}
              </p>

              <div class="mt-auto pt-8 flex items-center justify-between">
                <div class="flex items-center gap-3 translate-y-3 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-100">
                  <div class="w-8 h-[1px] bg-champagne/50"></div>
                  <span class="text-[8px] uppercase tracking-[0.3em] text-champagne/70 font-semibold">{{ langService.t().servicesPage.learnMore }}</span>
                </div>
                <span class="material-symbols-outlined text-white/0 group-hover:text-champagne/50 text-xl transition-all duration-700 group-hover:translate-x-1 group-hover:rotate-[-45deg]">arrow_outward</span>
              </div>
            </div>
          </div>

          <!-- Service 2 -->
          <div class="scroll-reveal group relative bg-[#0d1120] overflow-hidden cursor-default service-card-featured"
               style="--stagger: 0.1s"
               (mousemove)="onMouseMove($event)">
            <div class="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 glow-follow"></div>
            <div class="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-champagne to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)]"></div>
            
            <div class="relative p-10 md:p-14 flex flex-col min-h-[380px] md:min-h-[420px]">
              <div class="absolute top-8 right-10 text-[80px] md:text-[100px] font-display font-black text-white/[0.02] group-hover:text-champagne/[0.06] transition-colors duration-1000 leading-none select-none">02</div>
              
              <div class="mb-8 relative">
                <div class="w-16 h-16 border border-white/[0.08] group-hover:border-champagne/25 flex items-center justify-center transition-all duration-700 bg-white/[0.02] group-hover:bg-champagne/[0.06]">
                  <span class="material-symbols-outlined text-white/40 group-hover:text-champagne text-2xl transition-all duration-700 group-hover:scale-110">verified</span>
                </div>
                <div class="absolute -bottom-3 -right-3 w-6 h-6 border-r border-b border-champagne/0 group-hover:border-champagne/20 transition-all duration-700"></div>
              </div>

              <h3 class="text-2xl md:text-3xl font-bold text-white group-hover:text-white mb-4 tracking-tight transition-all duration-500 group-hover:translate-x-1">
                {{ langService.t().servicesPage.service2.title }}
              </h3>
              <p class="text-sm text-white/40 group-hover:text-white/60 leading-[2] font-light transition-all duration-700 max-w-sm">
                {{ langService.t().servicesPage.service2.desc }}
              </p>

              <div class="mt-auto pt-8 flex items-center justify-between">
                <div class="flex items-center gap-3 translate-y-3 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-100">
                  <div class="w-8 h-[1px] bg-champagne/50"></div>
                  <span class="text-[8px] uppercase tracking-[0.3em] text-champagne/70 font-semibold">{{ langService.t().servicesPage.learnMore }}</span>
                </div>
                <span class="material-symbols-outlined text-white/0 group-hover:text-champagne/50 text-xl transition-all duration-700 group-hover:translate-x-1 group-hover:rotate-[-45deg]">arrow_outward</span>
              </div>
            </div>
          </div>
        </div>
      </section>


      <!-- ═══════════════════ SERVICES GRID (6) ═══════════════════ -->
      <section class="max-w-[1400px] mx-auto px-6 md:px-10 mb-[1px]">
        <!-- Row 1 -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-[1px] mb-[1px]">
          @for (svc of servicesRow1; track svc.num) {
            <div class="scroll-reveal group relative bg-[#0d1120] overflow-hidden cursor-default"
                 [style.--stagger]="(svc.index * 0.08) + 's'"
                 (mousemove)="onMouseMove($event)">
              <div class="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-champagne/50 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-700 ease-out"></div>
              <div class="absolute top-0 left-0 w-[2px] h-0 bg-gradient-to-b from-champagne to-transparent group-hover:h-full transition-all duration-700 ease-out"></div>
              
              <div class="relative p-8 md:p-10 flex flex-col min-h-[300px]">
                <div class="absolute top-6 right-8 text-[56px] font-display font-black text-white/[0.02] group-hover:text-champagne/[0.05] transition-colors duration-700 leading-none select-none">{{ svc.num }}</div>
                
                <div class="flex items-center gap-4 mb-6">
                  <div class="w-11 h-11 border border-white/[0.08] group-hover:border-champagne/25 flex items-center justify-center transition-all duration-500 bg-white/[0.02] group-hover:bg-champagne/[0.06]">
                    <span class="material-symbols-outlined text-white/40 group-hover:text-champagne text-xl transition-all duration-500">{{ svc.icon }}</span>
                  </div>
                </div>
                
                <h3 class="text-lg md:text-xl font-bold text-white mb-3 tracking-tight transition-all duration-500">
                  {{ langService.t().servicesPage[svc.key].title }}
                </h3>
                <div class="w-8 h-[1px] bg-white/[0.08] group-hover:w-14 group-hover:bg-champagne/30 transition-all duration-700 mb-4"></div>
                <p class="text-[13px] text-white/35 group-hover:text-white/55 leading-[1.9] font-light transition-all duration-500 flex-1">
                  {{ langService.t().servicesPage[svc.key].desc }}
                </p>
              </div>
            </div>
          }
        </div>

        <!-- Row 2 -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-[1px]">
          @for (svc of servicesRow2; track svc.num) {
            <div class="scroll-reveal group relative bg-[#0d1120] overflow-hidden cursor-default"
                 [style.--stagger]="(svc.index * 0.08) + 's'"
                 (mousemove)="onMouseMove($event)">
              <div class="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-champagne/50 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-700 ease-out"></div>
              <div class="absolute top-0 left-0 w-[2px] h-0 bg-gradient-to-b from-champagne to-transparent group-hover:h-full transition-all duration-700 ease-out"></div>
              
              <div class="relative p-8 md:p-10 flex flex-col min-h-[300px]">
                <div class="absolute top-6 right-8 text-[56px] font-display font-black text-white/[0.02] group-hover:text-champagne/[0.05] transition-colors duration-700 leading-none select-none">{{ svc.num }}</div>
                
                <div class="flex items-center gap-4 mb-6">
                  <div class="w-11 h-11 border border-white/[0.08] group-hover:border-champagne/25 flex items-center justify-center transition-all duration-500 bg-white/[0.02] group-hover:bg-champagne/[0.06]">
                    <span class="material-symbols-outlined text-white/40 group-hover:text-champagne text-xl transition-all duration-500">{{ svc.icon }}</span>
                  </div>
                </div>
                
                <h3 class="text-lg md:text-xl font-bold text-white mb-3 tracking-tight transition-all duration-500">
                  {{ langService.t().servicesPage[svc.key].title }}
                </h3>
                <div class="w-8 h-[1px] bg-white/[0.08] group-hover:w-14 group-hover:bg-champagne/30 transition-all duration-700 mb-4"></div>
                <p class="text-[13px] text-white/35 group-hover:text-white/55 leading-[1.9] font-light transition-all duration-500 flex-1">
                  {{ langService.t().servicesPage[svc.key].desc }}
                </p>
              </div>
            </div>
          }
        </div>
      </section>


      <!-- ═══════════════════ MARQUEE ═══════════════════ -->
      <section class="py-16 overflow-hidden border-y border-white/[0.04] scroll-reveal mt-16">
        <div class="marquee-track flex items-center gap-16 whitespace-nowrap">
          @for (item of marqueeItems; track $index) {
            <span class="text-[clamp(1rem,3vw,1.5rem)] font-display font-black uppercase tracking-[0.2em] text-white/[0.06]">{{ item }}</span>
            <span class="w-2 h-2 bg-champagne/20 rounded-full flex-shrink-0"></span>
          }
        </div>
      </section>


      <!-- ═══════════════════ CTA ═══════════════════ -->
      <section class="max-w-[1400px] mx-auto px-6 md:px-10 py-24 md:py-36 scroll-reveal">
        <div class="relative border border-white/[0.06] overflow-hidden group/cta bg-[#0d1120]">
          <!-- Hover border glow -->
          <div class="absolute inset-0 opacity-0 group-hover/cta:opacity-100 transition-opacity duration-1000">
            <div class="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-champagne/30 to-transparent"></div>
            <div class="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-champagne/30 to-transparent"></div>
            <div class="absolute top-0 left-0 w-[1px] h-full bg-gradient-to-b from-transparent via-champagne/30 to-transparent"></div>
            <div class="absolute top-0 right-0 w-[1px] h-full bg-gradient-to-b from-transparent via-champagne/30 to-transparent"></div>
          </div>

          <div class="absolute inset-0 opacity-[0.02]" style="background-image: radial-gradient(rgba(var(--accent),0.3) 1px, transparent 1px); background-size: 24px 24px;"></div>

          <div class="relative p-12 md:p-20 lg:p-24 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-12">
            <div class="max-w-xl">
              <div class="flex items-center gap-3 mb-8">
                <div class="w-2 h-2 bg-champagne rounded-full"></div>
                <span class="text-[8px] uppercase tracking-[0.5em] text-champagne/50 font-semibold">{{ langService.t().servicesPage.ctaLabel }}</span>
              </div>
              <h2 class="text-4xl sm:text-5xl md:text-6xl font-display font-black tracking-tight leading-[0.95]">
                <span class="block text-white">{{ langService.t().servicesPage.ctaTitle1 }}</span>
                <span class="block text-champagne mt-1">{{ langService.t().servicesPage.ctaTitle2 }}</span>
              </h2>
            </div>

            <a routerLink="/contact" 
               class="group/btn relative inline-flex items-center gap-5 bg-transparent border border-champagne/30 hover:bg-champagne px-10 md:px-14 py-5 md:py-6 transition-all duration-700 overflow-hidden">
              <span class="relative z-10 text-[10px] md:text-[11px] uppercase tracking-[0.3em] font-bold text-champagne group-hover/btn:text-obsidian-deep transition-colors duration-500">{{ langService.t().servicesPage.ctaButton }}</span>
              <span class="relative z-10 material-symbols-outlined text-champagne group-hover/btn:text-obsidian-deep text-base transition-all duration-500 group-hover/btn:translate-x-2">east</span>
            </a>
          </div>
        </div>
      </section>

    </div>
  `,
  styles: [`
    /* ═══ Hero Reveal — single run, no loop ═══ */
    .hero-reveal {
      opacity: 0;
      transform: translateY(30px);
      animation: heroReveal 1s cubic-bezier(0.25, 1, 0.5, 1) forwards;
      animation-delay: var(--delay, 0s);
    }
    @keyframes heroReveal {
      to { opacity: 1; transform: translateY(0); }
    }

    /* ═══ Scroll Reveal ═══ */
    .scroll-reveal {
      opacity: 0;
      transform: translateY(40px);
      transition: opacity 0.8s cubic-bezier(0.25, 1, 0.5, 1),
                  transform 0.8s cubic-bezier(0.25, 1, 0.5, 1);
      transition-delay: var(--stagger, 0s);
    }
    .scroll-reveal.is-visible {
      opacity: 1;
      transform: translateY(0);
    }

    /* ═══ Cursor Glow ═══ */
    .glow-follow {
      background: radial-gradient(450px circle at var(--mx, 50%) var(--my, 50%), rgba(var(--accent), 0.07), transparent 55%);
    }

    /* ═══ Marquee ═══ */
    .marquee-track {
      animation: marquee 45s linear infinite;
      width: max-content;
    }
    @keyframes marquee {
      0% { transform: translateX(0); }
      100% { transform: translateX(-50%); }
    }

    /* ═══ Featured Card Lift ═══ */
    .service-card-featured {
      transition: transform 0.7s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.7s ease;
    }
    .service-card-featured:hover {
      transform: translateY(-3px);
      box-shadow: 0 25px 60px -15px rgba(0, 0, 0, 0.4);
    }
  `]
})
export class ServicesComponent implements OnInit, AfterViewInit, OnDestroy {
  langService = inject(LanguageService);
  activeService = signal(0);

  @ViewChild('pageRef') pageRef!: ElementRef;

  private observer: IntersectionObserver | null = null;
  private isBrowser: boolean;

  servicesRow1 = [
    { num: '03', key: 'service3', icon: 'qr_code_scanner', index: 0 },
    { num: '04', key: 'service4', icon: 'assessment', index: 1 },
    { num: '05', key: 'service5', icon: 'supervisor_account', index: 2 }
  ];

  servicesRow2 = [
    { num: '06', key: 'service6', icon: 'payments', index: 0 },
    { num: '07', key: 'service7', icon: 'group_add', index: 1 },
    { num: '08', key: 'service8', icon: 'inventory_2', index: 2 }
  ];

  marqueeItems: string[] = [];

  constructor(@Inject(PLATFORM_ID) platformId: Object) {
    this.isBrowser = isPlatformBrowser(platformId);
  }

  ngOnInit() {
    const base = [
      'Periyodik Sayım', 'Bağımsız Denetim', 'Ürün Doğrulama', 'Raporlama',
      'Ekip Yönetimi', 'Bordrolama', 'Personel Desteği', 'Demirbaş Sayımı'
    ];
    this.marqueeItems = [...base, ...base];
  }

  ngAfterViewInit() {
    if (!this.isBrowser) return;

    this.observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    setTimeout(() => {
      const reveals = this.pageRef?.nativeElement?.querySelectorAll('.scroll-reveal');
      reveals?.forEach((el: Element) => this.observer?.observe(el));
    }, 100);
  }

  ngOnDestroy() {
    this.observer?.disconnect();
  }

  onMouseMove(event: MouseEvent) {
    const card = event.currentTarget as HTMLElement;
    const rect = card.getBoundingClientRect();
    card.style.setProperty('--mx', `${event.clientX - rect.left}px`);
    card.style.setProperty('--my', `${event.clientY - rect.top}px`);
  }
}
import { Component, ChangeDetectionStrategy, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LanguageService } from '../../services/language.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule, RouterModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section class="min-h-screen bg-obsidian-deep pt-48 pb-20 relative overflow-hidden">
        <!-- ARCHITECTURAL BACKGROUND -->
        <div 
            class="absolute inset-0 z-0 opacity-20"
            style="background-image: radial-gradient(rgba(var(--accent), 0.1) 1px, transparent 1px); background-size: 20px 20px; animation: pan 120s linear infinite;">
        </div>
        <div class="absolute inset-0 z-0 bg-gradient-to-b from-obsidian-deep via-obsidian-deep/95 to-obsidian-deep"></div>

        <div class="max-w-[1600px] mx-auto px-4 md:px-8 relative z-10">
            
            <!-- Header -->
            <div class="grid grid-cols-12 gap-8 md:gap-12 mb-20 md:mb-32">
                <div class="col-span-12 lg:col-span-7 opacity-0 animate-[slideUp_1s_ease-out_forwards]">
                    <div class="flex items-center gap-6 mb-8">
                        <div class="w-16 h-px bg-champagne"></div>
                        <span class="text-[8px] uppercase tracking-[0.6em] text-champagne/60 font-medium">Premium Services</span>
                    </div>
                    <h1 class="text-7xl sm:text-8xl lg:text-8xl font-display font-black tracking-tight leading-none mb-6 text-white uppercase">
                        {{ langService.t().servicesPage.header }}
                    </h1>
                </div>
                <div class="col-span-12 lg:col-span-5 flex items-center opacity-0 animate-[fadeIn_1s_ease-out_0.3s_forwards]">
                    <div class="lg:ml-auto max-w-md">
                        <p class="text-gold-muted/60 text-base leading-relaxed font-light mb-8">
                            {{ langService.t().servicesPage.subHeader }}
                        </p>
                        <div class="flex items-center gap-4">
                            <div class="h-12 w-12 rounded-full border border-champagne/20 flex items-center justify-center">
                                <div class="w-2 h-2 bg-champagne rounded-full animate-pulse"></div>
                            </div>
                            <div>
                                <div class="text-xs text-champagne/40 uppercase tracking-widest mb-1">Available 24/7</div>
                                <div class="text-sm text-white font-medium">Global Coverage</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Bento Grid Layout -->
            <div class="space-y-8 opacity-0 animate-[fadeIn_1s_ease-out_0.6s_forwards]">
                
                <!-- Row 1: 2 Large Cards -->
                <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    
                    <!-- Service 1 - Featured -->
                    <div class="service-card group" (mousemove)="onCardMouseMove($event)" (mouseleave)="onCardMouseLeave($event)">
                        <div class="card-content-wrapper">
                            <div class="card-glow"></div>
                            <div class="card-border"></div>
                            
                            <div class="relative h-full flex flex-col p-8 md:p-12">
                                <div class="flex items-start justify-between mb-auto">
                                    <div>
                                        <div class="text-[10px] text-champagne/40 uppercase tracking-[0.3em] mb-4 flex items-center gap-3">
                                            <span>Featured Service</span>
                                            <div class="w-12 h-px bg-champagne/20"></div>
                                        </div>
                                        <h3 class="text-3xl md:text-4xl font-display font-bold text-white mb-4 leading-tight">
                                            {{ langService.t().servicesPage.service1.title }}
                                        </h3>
                                    </div>
                                    <div class="text-7xl md:text-8xl font-display font-black text-champagne/5 group-hover:text-champagne/10 transition-colors duration-700">01</div>
                                </div>
                                <div class="space-y-6 mt-8">
                                    <p class="text-gold-muted/70 text-base leading-relaxed max-w-md">
                                        {{ langService.t().servicesPage.service1.desc }}
                                    </p>
                                    <div class="flex items-center gap-4 pt-4">
                                        <div class="card-icon-wrapper">
                                            <span class="material-symbols-outlined text-3xl text-champagne">calendar_month</span>
                                        </div>
                                        <div class="flex-1 h-px bg-gradient-to-r from-champagne/20 to-transparent"></div>
                                        <div class="card-explore-link">
                                            <span class="text-xs uppercase tracking-widest font-bold">Explore</span>
                                            <span class="material-symbols-outlined text-lg">arrow_forward</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Service 2 - Featured -->
                    <div class="service-card group" (mousemove)="onCardMouseMove($event)" (mouseleave)="onCardMouseLeave($event)">
                        <div class="card-content-wrapper">
                            <div class="card-glow"></div>
                            <div class="card-border"></div>
                            <div class="relative h-full flex flex-col p-8 md:p-12">
                                <div class="flex items-start justify-between mb-auto">
                                    <div>
                                        <div class="text-[10px] text-champagne/40 uppercase tracking-[0.3em] mb-4 flex items-center gap-3">
                                            <span>Premium Service</span>
                                            <div class="w-12 h-px bg-champagne/20"></div>
                                        </div>
                                        <h3 class="text-3xl md:text-4xl font-display font-bold text-white mb-4 leading-tight">
                                            {{ langService.t().servicesPage.service2.title }}
                                        </h3>
                                    </div>
                                    <div class="text-7xl md:text-8xl font-display font-black text-champagne/5 group-hover:text-champagne/10 transition-colors duration-700">02</div>
                                </div>
                                <div class="space-y-6 mt-8">
                                    <p class="text-gold-muted/70 text-base leading-relaxed max-w-md">
                                        {{ langService.t().servicesPage.service2.desc }}
                                    </p>
                                    <div class="flex items-center gap-4 pt-4">
                                        <div class="card-icon-wrapper">
                                            <span class="material-symbols-outlined text-3xl text-champagne">verified</span>
                                        </div>
                                        <div class="flex-1 h-px bg-gradient-to-r from-champagne/20 to-transparent"></div>
                                        <div class="card-explore-link">
                                            <span class="text-xs uppercase tracking-widest font-bold">Explore</span>
                                            <span class="material-symbols-outlined text-lg">arrow_forward</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Row 2: 3 Medium Cards -->
                <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                    @for(service of [3,4,5]; track service) {
                        <div class="service-card group" (mousemove)="onCardMouseMove($event)" (mouseleave)="onCardMouseLeave($event)">
                            <div class="card-content-wrapper">
                                <div class="card-glow"></div>
                                <div class="card-border"></div>
                                <div class="relative h-full flex flex-col p-8 md:p-10">
                                    <div class="mb-auto">
                                        <div class="card-icon-wrapper w-16 h-16 rounded-2xl">
                                            <span class="material-symbols-outlined text-2xl text-champagne">
                                                {{ service === 3 ? 'qr_code_scanner' : (service === 4 ? 'analytics' : 'groups') }}
                                            </span>
                                        </div>
                                        <div class="text-5xl md:text-6xl font-display font-black text-champagne/5 absolute top-8 right-8">0{{ service }}</div>
                                    </div>
                                    <div class="mt-8">
                                        <h3 class="text-xl md:text-2xl font-bold text-white mb-3 leading-tight">
                                            {{ langService.t().servicesPage['service'+service].title }}
                                        </h3>
                                        <div class="w-16 h-px bg-champagne/30 mb-4 group-hover:w-full transition-all duration-700"></div>
                                        <p class="text-gold-muted/60 text-sm leading-relaxed">
                                            {{ langService.t().servicesPage['service'+service].desc }}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    }
                </div>
            </div>

            <!-- CTA -->
            <div class="mt-20 md:mt-32 relative opacity-0 animate-[fadeIn_1s_ease-out_1.2s_forwards]">
                <div class="relative bg-gradient-to-br from-champagne/10 via-transparent to-champagne/5 border border-champagne/20 overflow-hidden">
                    <div class="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/grid-noise.png')] opacity-5"></div>
                    <div class="relative grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16 p-12 md:p-16 lg:p-24">
                        <div>
                            <div class="text-[10px] text-champagne/40 uppercase tracking-[0.4em] mb-6 flex items-center gap-4">
                                <div class="w-8 h-8 rounded-full border border-champagne/20 flex items-center justify-center">
                                    <div class="w-2 h-2 bg-champagne rounded-full animate-pulse"></div>
                                </div>
                                <span>Get Started Today</span>
                            </div>
                            <h2 class="text-4xl sm:text-5xl md:text-7xl font-display font-black tracking-tight leading-none mb-8">
                                <span class="block text-white">{{ langService.t().servicesPage.ctaTitle1 }}</span>
                                <span class="block text-champagne">{{ langService.t().servicesPage.ctaTitle2 }}</span>
                            </h2>
                        </div>
                        <div class="lg:ml-auto flex items-center max-w-md">
                            <div class="flex flex-wrap items-center gap-6">
                                <a routerLink="/contact" class="group relative inline-flex items-center gap-3 bg-champagne text-obsidian-deep px-8 py-5 sm:px-10 sm:py-6 font-bold text-[10px] uppercase tracking-[0.3em] overflow-hidden">
                                    <span class="relative z-10">{{ langService.t().servicesPage.ctaButton }}</span>
                                    <span class="material-symbols-outlined text-sm relative z-10 transform group-hover:translate-x-2 transition-transform duration-300">arrow_forward</span>
                                    <div class="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  `,
  styles: [`
    @keyframes pan {
        0% { background-position: 0% 0%; }
        100% { background-position: 100% 100%; }
    }
    
    .service-card {
        position: relative;
        transform-style: preserve-3d;
        will-change: transform;
    }

    .card-content-wrapper {
        position: relative;
        width: 100%;
        height: 100%;
        background: linear-gradient(135deg, rgba(15, 23, 42, 0.8), rgba(2, 6, 23, 0.8));
        backdrop-filter: blur(10px);
        transform-style: preserve-3d;
        transition: transform 0.6s cubic-bezier(0.23, 1, 0.32, 1);
        will-change: transform;
        border: 1px solid rgba(var(--accent), 0.1);
    }

    .card-border {
        position: absolute;
        inset: 0;
        opacity: 0;
        transition: opacity 0.5s ease;
        border: 1px solid transparent;
        background: radial-gradient(400px circle at var(--mouse-x) var(--mouse-y), rgba(var(--accent), 0.3), transparent 40%) border-box;
    }
    
    .service-card:hover .card-border {
        opacity: 1;
    }
    
    .card-glow {
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        background: radial-gradient(600px circle at var(--mouse-x) var(--mouse-y), rgba(var(--accent), 0.08), transparent 50%);
        opacity: 0;
        transition: opacity 0.5s;
        z-index: 0;
    }

    .service-card:hover .card-glow {
        opacity: 1;
    }

    .card-icon-wrapper {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        width: 80px;
        height: 80px;
        border-radius: 9999px;
        background-color: rgba(var(--accent), 0.05);
        border: 1px solid rgba(var(--accent), 0.1);
        transition: all 0.7s cubic-bezier(0.165, 0.84, 0.44, 1);
    }
    .service-card:hover .card-icon-wrapper {
        background-color: rgba(var(--accent), 0.1);
        border-color: rgba(var(--accent), 0.2);
        transform: translateY(-5px);
    }
    
    .card-explore-link {
        color: rgba(var(--accent), 0);
        transition: all 0.5s ease;
        display: flex;
        align-items: center;
        gap: 0.5rem;
    }
    .service-card:hover .card-explore-link {
        color: rgba(var(--accent), 1);
    }
  `]
})
export class ServicesComponent {
  langService = inject(LanguageService);
  private readonly MAX_TILT = 8;

  onCardMouseMove(event: MouseEvent) {
    const card = event.currentTarget as HTMLElement;
    const content = card.querySelector('.card-content-wrapper') as HTMLElement;
    if (!content) return;

    const rect = card.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateY = (x - centerX) / centerX * this.MAX_TILT;
    const rotateX = (centerY - y) / centerY * this.MAX_TILT;

    content.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;

    card.style.setProperty('--mouse-x', `${x}px`);
    card.style.setProperty('--mouse-y', `${y}px`);
  }

  onCardMouseLeave(event: MouseEvent) {
    const card = event.currentTarget as HTMLElement;
    const content = card.querySelector('.card-content-wrapper') as HTMLElement;
    if (content) {
        content.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
    }
  }
}
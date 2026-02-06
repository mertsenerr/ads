
import { Component, ChangeDetectionStrategy, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-vision',
  standalone: true,
  imports: [CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section class="min-h-screen bg-background-dark pt-32 pb-20 relative overflow-hidden">
        <!-- Hero Background: Futuristic Horizon / City -->
        <div class="absolute inset-0 z-0 pointer-events-none">
            <img 
                src="https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?q=80&w=2070&auto=format&fit=crop" 
                alt="Future Horizon" 
                class="w-full h-full object-cover opacity-[0.15] scale-105 warm-studio-filter animate-[pulse_10s_ease-in-out_infinite]"
            />
            <div class="absolute inset-0 bg-gradient-to-b from-background-dark via-transparent to-background-dark"></div>
        </div>

        <!-- Background Elements -->
        <div class="absolute bottom-0 left-0 w-full h-1/2 bg-[radial-gradient(ellipse_at_bottom,rgba(212,197,176,0.1),transparent_70%)] pointer-events-none"></div>
        
        <div class="max-w-7xl mx-auto px-6 relative z-10">
            <!-- Header -->
            <div class="mb-32">
                 <div class="flex items-center gap-4 mb-6 opacity-0 animate-[fadeIn_1s_ease-out_forwards]">
                   <div class="h-px w-12 bg-champagne"></div>
                   <span class="text-[10px] uppercase tracking-[0.4em] text-champagne font-bold">{{ langService.t().navbar.vision }}</span>
                </div>
                <h1 class="text-5xl md:text-9xl font-display font-bold text-platinum tracking-tighter leading-none mb-10 opacity-0 animate-[slideUp_1s_ease-out_0.3s_forwards]">
                    {{ langService.t().visionPage.header }}
                </h1>
                 <p class="text-xl md:text-2xl font-light text-gold-muted/80 max-w-3xl leading-relaxed border-l-2 border-champagne/30 pl-8 mb-16 opacity-0 animate-[fadeIn_1s_ease-out_0.6s_forwards]">
                    {{ langService.t().visionPage.subHeader }}
                </p>
                <div class="max-w-4xl opacity-0 animate-[fadeIn_1s_ease-out_0.9s_forwards]">
                     <p class="text-white text-lg leading-relaxed font-light">
                        {{ langService.t().visionPage.intro }}
                     </p>
                </div>
            </div>

            <!-- Timeline -->
            <div class="relative opacity-0 animate-[fadeIn_1s_ease-out_1.2s_forwards]">
                <!-- Line -->
                <div class="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-champagne/20"></div>

                <div class="space-y-32 relative">
                    <!-- Item 1 -->
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-16 items-center relative group">
                        <div class="md:text-right pr-12 order-2 md:order-1 pl-12 md:pl-0">
                            <span class="text-6xl font-display font-bold text-champagne/20 group-hover:text-champagne transition-colors duration-500 block mb-2">{{ langService.t().visionPage.timeline1Year }}</span>
                            <h3 class="text-2xl font-bold text-white mb-4">{{ langService.t().visionPage.timeline1Title }}</h3>
                            <p class="text-gold-muted/60 text-sm font-light leading-relaxed">{{ langService.t().visionPage.timeline1Text }}</p>
                        </div>
                        <div class="absolute left-4 md:left-1/2 -translate-x-1/2 w-4 h-4 bg-background-dark border border-champagne rounded-full z-20 group-hover:bg-champagne transition-colors duration-500"></div>
                        <div class="order-1 md:order-2 pl-12 md:pl-12 opacity-50 group-hover:opacity-100 transition-opacity duration-500">
                             <div class="w-full h-40 bg-obsidian-matte border border-champagne/10 relative overflow-hidden">
                                 <div class="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/grid-noise.png')] opacity-30"></div>
                             </div>
                        </div>
                    </div>

                    <!-- Item 2 -->
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-16 items-center relative group">
                        <div class="order-2 pl-12 md:pl-12 opacity-50 group-hover:opacity-100 transition-opacity duration-500 md:text-right">
                             <div class="w-full h-40 bg-obsidian-matte border border-champagne/10 relative overflow-hidden">
                                 <div class="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/grid-noise.png')] opacity-30"></div>
                             </div>
                        </div>
                        <div class="absolute left-4 md:left-1/2 -translate-x-1/2 w-4 h-4 bg-background-dark border border-champagne rounded-full z-20 group-hover:bg-champagne transition-colors duration-500"></div>
                        <div class="pl-12 md:pl-12 order-1 md:order-2">
                            <span class="text-6xl font-display font-bold text-champagne/20 group-hover:text-champagne transition-colors duration-500 block mb-2">{{ langService.t().visionPage.timeline2Year }}</span>
                            <h3 class="text-2xl font-bold text-white mb-4">{{ langService.t().visionPage.timeline2Title }}</h3>
                            <p class="text-gold-muted/60 text-sm font-light leading-relaxed">{{ langService.t().visionPage.timeline2Text }}</p>
                        </div>
                    </div>

                    <!-- Item 3 -->
                     <div class="grid grid-cols-1 md:grid-cols-2 gap-16 items-center relative group">
                        <div class="md:text-right pr-12 order-2 md:order-1 pl-12 md:pl-0">
                            <span class="text-6xl font-display font-bold text-champagne/20 group-hover:text-champagne transition-colors duration-500 block mb-2">{{ langService.t().visionPage.timeline3Year }}</span>
                            <h3 class="text-2xl font-bold text-white mb-4">{{ langService.t().visionPage.timeline3Title }}</h3>
                            <p class="text-gold-muted/60 text-sm font-light leading-relaxed">{{ langService.t().visionPage.timeline3Text }}</p>
                        </div>
                        <div class="absolute left-4 md:left-1/2 -translate-x-1/2 w-4 h-4 bg-background-dark border border-champagne rounded-full z-20 group-hover:bg-champagne transition-colors duration-500"></div>
                         <div class="order-1 md:order-2 pl-12 md:pl-12 opacity-50 group-hover:opacity-100 transition-opacity duration-500">
                             <div class="w-full h-40 bg-obsidian-matte border border-champagne/10 relative overflow-hidden">
                                 <div class="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/grid-noise.png')] opacity-30"></div>
                             </div>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    </section>
  `
})
export class VisionComponent {
    langService = inject(LanguageService);
}


import { Component, ChangeDetectionStrategy, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-mission',
  standalone: true,
  imports: [CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section class="min-h-screen bg-obsidian-deep pt-32 pb-20 relative overflow-hidden">
        
        <!-- Background: Global World Network (Restored) -->
        <div class="absolute inset-0 z-0 pointer-events-none">
            <img 
                src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop" 
                alt="Global Network" 
                class="w-full h-full object-cover opacity-20 animate-[pulse_10s_ease-in-out_infinite]"
            />
            <!-- Dark Gradient Overlay for readability -->
            <div class="absolute inset-0 bg-gradient-to-b from-obsidian-deep via-obsidian-deep/80 to-obsidian-deep"></div>
        </div>

        <div class="watermark-text top-1/2 left-1/2 -translate-x-1/4 -translate-y-1/2 opacity-5 select-none">Mission</div>

        <div class="max-w-7xl mx-auto px-6 relative z-10">
             <!-- Header -->
            <div class="text-center mb-24">
                <div class="flex items-center justify-center gap-4 mb-8 opacity-0 animate-[fadeIn_1s_ease-out_forwards]">
                   <span class="text-[10px] uppercase tracking-[0.4em] text-champagne font-bold">{{ langService.t().navbar.mission }}</span>
                </div>
                <h1 class="text-5xl md:text-8xl font-display font-bold text-platinum tracking-tighter leading-none mb-8 opacity-0 animate-[slideUp_1s_ease-out_0.3s_forwards]">
                    {{ langService.t().missionPage.header }}
                </h1>
                <p class="text-xl md:text-2xl font-light text-gold-muted/80 max-w-3xl mx-auto leading-relaxed opacity-0 animate-[fadeIn_1s_ease-out_0.6s_forwards]">
                    {{ langService.t().missionPage.subHeader }}
                </p>
            </div>

            <!-- Strategy Section -->
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center opacity-0 animate-[fadeIn_1s_ease-out_0.9s_forwards] mb-32">
                
                <!-- Visual Container (Updated with nice static image) -->
                <div class="relative h-[400px] lg:h-[500px] w-full bg-black overflow-hidden group border border-champagne/10 shadow-[0_0_50px_rgba(0,0,0,0.5)]">
                     
                     <!-- High Tech Image: Data Stream / Digital Map -->
                     <img 
                        src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=2034&auto=format&fit=crop" 
                        alt="Digital Data Stream"
                        class="absolute inset-0 w-full h-full object-cover opacity-60 grayscale mix-blend-screen scale-105 group-hover:scale-110 transition-transform duration-[10s]"
                     />

                     <!-- Static Texture Overlay -->
                     <div class="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/grid-noise.png')] opacity-30 mix-blend-overlay"></div>

                     <div class="absolute inset-0 bg-gradient-to-r from-obsidian-deep via-transparent to-obsidian-deep/50 pointer-events-none"></div>
                     
                     <!-- Overlay UI -->
                     <div class="absolute bottom-6 left-6 flex items-center gap-3 z-10">
                         <div class="flex space-x-1">
                             <div class="w-1 h-4 bg-terminal-green animate-pulse"></div>
                             <div class="w-1 h-6 bg-terminal-green animate-pulse delay-75"></div>
                             <div class="w-1 h-3 bg-terminal-green animate-pulse delay-150"></div>
                         </div>
                         <span class="text-[9px] uppercase tracking-widest text-terminal-green font-bold">Processing Data Stream</span>
                     </div>
                     
                     <div class="absolute inset-0 border border-champagne/10 m-2 pointer-events-none"></div>
                     <!-- Scanner Line Animation -->
                     <div class="absolute top-0 left-0 w-full h-1 bg-champagne/50 shadow-[0_0_20px_rgba(59,130,246,0.8)] animate-[scan_3s_ease-in-out_infinite] opacity-50"></div>
                </div>
                
                <div>
                     <span class="text-[10px] uppercase tracking-[0.4em] text-champagne font-bold mb-8 block">{{ langService.t().missionPage.strategyTitle }}</span>
                     <ul class="space-y-10">
                        <li class="flex items-start gap-6 group cursor-default">
                            <span class="text-champagne/50 font-display font-bold text-3xl group-hover:text-champagne transition-colors">01.</span>
                            <div class="w-full">
                                <h4 class="text-white text-xl font-bold tracking-wide mb-3 group-hover:translate-x-2 transition-transform">{{ langService.t().missionPage.vec1 }}</h4>
                                <div class="h-px w-full bg-zinc-800 group-hover:bg-champagne/50 transition-colors"></div>
                                <p class="text-gold-muted/50 text-xs mt-2 font-light">Ensuring data integrity during transmission.</p>
                            </div>
                        </li>
                        <li class="flex items-start gap-6 group cursor-default">
                            <span class="text-champagne/50 font-display font-bold text-3xl group-hover:text-champagne transition-colors">02.</span>
                            <div class="w-full">
                                <h4 class="text-white text-xl font-bold tracking-wide mb-3 group-hover:translate-x-2 transition-transform">{{ langService.t().missionPage.vec2 }}</h4>
                                <div class="h-px w-full bg-zinc-800 group-hover:bg-champagne/50 transition-colors"></div>
                                <p class="text-gold-muted/50 text-xs mt-2 font-light">Processing counts at the device level for speed.</p>
                            </div>
                        </li>
                         <li class="flex items-start gap-6 group cursor-default">
                            <span class="text-champagne/50 font-display font-bold text-3xl group-hover:text-champagne transition-colors">03.</span>
                            <div class="w-full">
                                <h4 class="text-white text-xl font-bold tracking-wide mb-3 group-hover:translate-x-2 transition-transform">{{ langService.t().missionPage.vec3 }}</h4>
                                <div class="h-px w-full bg-zinc-800 group-hover:bg-champagne/50 transition-colors"></div>
                                <p class="text-gold-muted/50 text-xs mt-2 font-light">Adaptive algorithms that learn your stock patterns.</p>
                            </div>
                        </li>
                     </ul>
                </div>
            </div>

             <!-- Three Pillars -->
            <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-32 opacity-0 animate-[fadeIn_1s_ease-out_1.2s_forwards]">
                <!-- Card 1 -->
                <div class="group border border-champagne/10 bg-obsidian-matte p-10 hover:border-champagne/30 transition-all duration-500 relative overflow-hidden">
                    <div class="absolute top-0 right-0 p-4 opacity-20 group-hover:opacity-100 transition-opacity duration-500">
                        <span class="material-symbols-outlined text-4xl text-champagne">visibility</span>
                    </div>
                    <h3 class="text-xl font-bold text-white mb-4 relative z-10 tracking-widest uppercase">{{ langService.t().missionPage.card1Title }}</h3>
                    <p class="text-gold-muted/60 text-sm leading-relaxed relative z-10 font-light">
                        {{ langService.t().missionPage.card1Text }}
                    </p>
                </div>

                <!-- Card 2 -->
                <div class="group border border-champagne/10 bg-obsidian-matte p-10 hover:border-champagne/30 transition-all duration-500 relative overflow-hidden">
                     <div class="absolute top-0 right-0 p-4 opacity-20 group-hover:opacity-100 transition-opacity duration-500">
                        <span class="material-symbols-outlined text-4xl text-champagne">recycling</span>
                    </div>
                    <h3 class="text-xl font-bold text-white mb-4 relative z-10 tracking-widest uppercase">{{ langService.t().missionPage.card2Title }}</h3>
                    <p class="text-gold-muted/60 text-sm leading-relaxed relative z-10 font-light">
                         {{ langService.t().missionPage.card2Text }}
                    </p>
                </div>

                <!-- Card 3 -->
                <div class="group border border-champagne/10 bg-obsidian-matte p-10 hover:border-champagne/30 transition-all duration-500 relative overflow-hidden">
                     <div class="absolute top-0 right-0 p-4 opacity-20 group-hover:opacity-100 transition-opacity duration-500">
                        <span class="material-symbols-outlined text-4xl text-champagne">sync</span>
                    </div>
                    <h3 class="text-xl font-bold text-white mb-4 relative z-10 tracking-widest uppercase">{{ langService.t().missionPage.card3Title }}</h3>
                    <p class="text-gold-muted/60 text-sm leading-relaxed relative z-10 font-light">
                         {{ langService.t().missionPage.card3Text }}
                    </p>
                </div>
            </div>

        </div>
    </section>
  `,
  styles: [`
    @keyframes scan {
        0% { top: 0%; opacity: 0; }
        10% { opacity: 0.5; }
        90% { opacity: 0.5; }
        100% { top: 100%; opacity: 0; }
    }
  `]
})
export class MissionComponent {
  langService = inject(LanguageService);
}

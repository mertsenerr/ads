
import { Component, ChangeDetectionStrategy, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section class="min-h-screen bg-background-dark pt-32 pb-20 relative overflow-hidden">
        <!-- Hero Background: Warehouse/Counting Context -->
        <div class="absolute inset-0 z-0 pointer-events-none">
            <img 
                src="https://images.unsplash.com/photo-1587293852726-70cdb56c2866?q=80&w=2072&auto=format&fit=crop" 
                alt="Warehouse Aisles" 
                class="w-full h-full object-cover opacity-[0.15] scale-105 warm-studio-filter animate-[pulse_10s_ease-in-out_infinite]"
            />
            <div class="absolute inset-0 bg-gradient-to-b from-background-dark via-transparent to-background-dark"></div>
        </div>

        <!-- Background Elements -->
        <div class="absolute top-0 right-0 w-2/3 h-full bg-[radial-gradient(circle_at_center,rgba(212,197,176,0.03),transparent_70%)] pointer-events-none"></div>
        <div class="watermark-text top-40 right-10 opacity-10 translate-x-1/2">Audit</div>

        <div class="max-w-7xl mx-auto px-6 relative z-10">
            
            <!-- Page Header -->
            <div class="mb-24">
                <div class="flex items-center gap-4 mb-6 opacity-0 animate-[fadeIn_1s_ease-out_forwards]">
                   <div class="h-px w-12 bg-champagne"></div>
                   <span class="text-[10px] uppercase tracking-[0.4em] text-champagne font-bold">{{ langService.t().navbar.about }}</span>
                </div>
                <h1 class="text-5xl md:text-8xl font-display font-bold text-platinum tracking-tighter leading-none mb-8 opacity-0 animate-[slideUp_1s_ease-out_0.3s_forwards]">
                    {{ langService.t().aboutPage.header }}
                </h1>
                <p class="text-xl md:text-2xl font-light text-gold-muted/80 max-w-3xl leading-relaxed border-l-2 border-champagne/30 pl-8 opacity-0 animate-[fadeIn_1s_ease-out_0.6s_forwards]">
                    {{ langService.t().aboutPage.subHeader }}
                </p>
            </div>

            <!-- Content Grid -->
            <div class="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-32 opacity-0 animate-[fadeIn_1s_ease-out_0.9s_forwards]">
                <!-- Left: Manifesto -->
                <div class="lg:col-span-7 space-y-12">
                    <div>
                        <h3 class="text-2xl font-bold text-white mb-6 tracking-tight">{{ langService.t().aboutPage.manifestoTitle }}</h3>
                        <p class="text-gold-muted/70 leading-loose text-sm font-light mb-6 text-justify">
                           {{ langService.t().aboutPage.manifestoText1 }}
                        </p>
                         <p class="text-gold-muted/70 leading-loose text-sm font-light text-justify">
                           {{ langService.t().aboutPage.manifestoText2 }}
                        </p>
                    </div>

                    <!-- Stats Row -->
                    <div class="grid grid-cols-3 gap-8 pt-12 border-t border-champagne/10">
                        <div>
                            <div class="text-4xl font-display font-bold text-champagne mb-2">{{ langService.t().aboutPage.stat1.num }}</div>
                            <div class="text-[9px] uppercase tracking-[0.2em] text-gold-muted/50">{{ langService.t().aboutPage.stat1.label }}</div>
                        </div>
                        <div>
                            <div class="text-4xl font-display font-bold text-champagne mb-2">{{ langService.t().aboutPage.stat2.num }}</div>
                            <div class="text-[9px] uppercase tracking-[0.2em] text-gold-muted/50">{{ langService.t().aboutPage.stat2.label }}</div>
                        </div>
                         <div>
                            <div class="text-4xl font-display font-bold text-champagne mb-2">{{ langService.t().aboutPage.stat3.num }}</div>
                            <div class="text-[9px] uppercase tracking-[0.2em] text-gold-muted/50">{{ langService.t().aboutPage.stat3.label }}</div>
                        </div>
                    </div>
                </div>

                <!-- Right: Visual (Fixed & Enhanced) -->
                <div class="lg:col-span-5 relative group min-h-[500px]">
                     <!-- Tech Corners Frame -->
                     <div class="absolute -top-1 -left-1 w-8 h-8 border-t border-l border-champagne z-20"></div>
                     <div class="absolute -top-1 -right-1 w-8 h-8 border-t border-r border-champagne z-20"></div>
                     <div class="absolute -bottom-1 -left-1 w-8 h-8 border-b border-l border-champagne z-20"></div>
                     <div class="absolute -bottom-1 -right-1 w-8 h-8 border-b border-r border-champagne z-20"></div>

                     <!-- Main Image Container -->
                     <div class="relative h-full w-full bg-obsidian-matte overflow-hidden border border-white/5 shadow-2xl">
                         <!-- Fallback background color in case image loads slowly -->
                         <div class="absolute inset-0 bg-zinc-900"></div>

                         <!-- High Quality Warehouse Audit Team Image (Matching stoksayim.png concept) -->
                         <img 
                            src="https://scanforce.com/wp-content/uploads/2022/01/AdobeStock_390578199-scaled.jpeg" 
                            class="absolute inset-0 w-full h-full object-cover opacity-80 grayscale contrast-125 transition-all duration-[2s] ease-out group-hover:scale-105 group-hover:grayscale-0 group-hover:opacity-100" 
                            alt="Professional Warehouse Audit Team"
                         />
                         
                         <!-- Digital Grid Overlay -->
                         <div class="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/grid-noise.png')] opacity-10 pointer-events-none"></div>
                         
                         <!-- Gradient Shade -->
                         <div class="absolute inset-0 bg-gradient-to-t from-background-dark via-transparent to-transparent opacity-60"></div>
                         
                         <!-- Animated Scanner Line -->
                         <div class="absolute top-0 left-0 w-full h-px bg-champagne/40 shadow-[0_0_15px_rgba(212,197,176,0.5)] animate-[scan_4s_ease-in-out_infinite] opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

                         <!-- Badge: Certified Auditor (Centered) -->
                         <div class="absolute bottom-10 left-1/2 -translate-x-1/2 bg-black/90 backdrop-blur-xl border border-champagne/20 px-8 py-5 flex items-center gap-5 shadow-[0_10px_40px_rgba(0,0,0,0.5)] min-w-[260px] group-hover:bg-black transition-colors duration-500">
                            <div class="w-10 h-10 rounded-full border border-champagne/60 flex items-center justify-center bg-champagne/5 shrink-0">
                                <span class="material-symbols-outlined text-champagne text-lg">verified_user</span>
                            </div>
                            <div class="flex flex-col border-l border-white/10 pl-5">
                                <span class="text-[9px] uppercase tracking-[0.3em] text-gold-muted block mb-1">Status</span>
                                <span class="text-[12px] uppercase tracking-widest text-white font-bold block whitespace-nowrap">Certified Auditor</span>
                            </div>
                         </div>
                     </div>
                </div>
            </div>

            <!-- Philosophy Section -->
            <div class="grid grid-cols-1 md:grid-cols-2 gap-px bg-champagne/10 border border-champagne/10 mb-32 opacity-0 animate-[fadeIn_1s_ease-out_1s_forwards]">
                <div class="bg-obsidian-matte p-16 flex flex-col justify-center">
                    <h3 class="text-3xl font-display font-bold text-platinum mb-8">{{ langService.t().aboutPage.philosophyTitle }}</h3>
                     <p class="text-gold-muted/70 leading-loose font-light">
                        {{ langService.t().aboutPage.philosophyText }}
                     </p>
                </div>
                <div class="bg-zinc-900/50 p-16 flex items-center justify-center relative overflow-hidden group">
                    <div class="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] group-hover:scale-110 transition-transform duration-[5s]"></div>
                    <!-- Changed Icon to scanner -->
                    <span class="material-symbols-outlined text-9xl text-champagne/10 group-hover:text-champagne/20 transition-colors duration-700">qr_code_scanner</span>
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
export class AboutComponent {
  langService = inject(LanguageService);
}

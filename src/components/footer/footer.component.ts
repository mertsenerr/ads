
import { Component, ChangeDetectionStrategy, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <footer class="bg-background-dark pt-32 pb-16 border-t border-champagne/5 relative overflow-hidden">
        <!-- Decoration -->
        <div class="absolute top-0 left-1/2 -translate-x-1/2 w-px h-20 bg-gradient-to-b from-champagne/20 to-transparent"></div>

        <div class="max-w-7xl mx-auto px-6 relative z-10">
            <div class="grid grid-cols-1 md:grid-cols-4 gap-16 mb-24">
                <div class="col-span-1 md:col-span-2">
                    <div class="flex items-center gap-3 mb-10">
                        <span class="font-display font-bold text-xl tracking-tighter text-champagne">ADS</span>
                    </div>
                    <p class="text-gold-muted/50 max-w-sm text-sm leading-relaxed font-light tracking-wide">
                        {{ langService.t().footer.desc }}
                    </p>
                </div>
                
                <div>
                    <h5 class="text-[10px] uppercase tracking-[0.4em] font-bold text-champagne/80 mb-10">{{ langService.t().footer.col1 }}</h5>
                    <ul class="space-y-5 text-xs text-gold-muted/60 font-light tracking-widest">
                        @for (link of langService.t().footer.col1Links; track link) {
                            <li><a href="#" class="hover:text-champagne transition-colors duration-300 flex items-center gap-2 group"><span class="w-0 h-px bg-champagne transition-all duration-300 group-hover:w-3"></span>{{ link }}</a></li>
                        }
                    </ul>
                </div>

                <div>
                    <h5 class="text-[10px] uppercase tracking-[0.4em] font-bold text-champagne/80 mb-10">{{ langService.t().footer.col2 }}</h5>
                    <ul class="space-y-5 text-xs text-gold-muted/60 font-light tracking-widest">
                        @for (link of langService.t().footer.col2Links; track link) {
                            <li><a href="#" class="hover:text-champagne transition-colors duration-300 flex items-center gap-2 group"><span class="w-0 h-px bg-champagne transition-all duration-300 group-hover:w-3"></span>{{ link }}</a></li>
                        }
                    </ul>
                </div>
            </div>

            <div class="flex flex-col md:flex-row items-center justify-between pt-12 border-t border-white/5 gap-10">
                <div class="text-[9px] uppercase tracking-[0.3em] text-gold-muted/40 font-medium">
                    {{ langService.t().footer.copyright }}
                </div>
                <div class="flex gap-10 text-gold-muted/60">
                    <a href="#" class="hover:text-champagne transition-colors"><span class="material-symbols-outlined text-xl">language</span></a>
                    <a href="#" class="hover:text-champagne transition-colors text-[9px] uppercase tracking-[0.3em] font-bold">LinkedIn</a>
                    <a href="#" class="hover:text-champagne transition-colors text-[9px] uppercase tracking-[0.3em] font-bold">Twitter</a>
                </div>
            </div>
        </div>
    </footer>
  `
})
export class FooterComponent {
    langService = inject(LanguageService);
}

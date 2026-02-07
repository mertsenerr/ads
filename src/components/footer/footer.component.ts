import { Component, ChangeDetectionStrategy, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, RouterModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <footer class="bg-background-dark pt-32 pb-16 border-t border-champagne/5 relative overflow-hidden">
        <div class="absolute top-0 left-1/2 -translate-x-1/2 w-px h-20 bg-gradient-to-b from-champagne/20 to-transparent"></div>

        <div class="max-w-7xl mx-auto px-6 relative z-10">
            <div class="grid grid-cols-1 md:grid-cols-4 gap-16 mb-24">
                <!-- Brand -->
                <div class="col-span-1 md:col-span-2">
                    <div class="flex items-center gap-3 mb-10">
                        <span class="font-display font-bold text-xl tracking-tighter text-champagne">ADS</span>
                    </div>
                    <p class="text-gold-muted/50 max-w-sm text-sm leading-relaxed font-light tracking-wide">
                        {{ langService.t().footer.desc }}
                    </p>
                </div>
                
                <!-- Services Column -->
                <div>
                    <h5 class="text-[10px] uppercase tracking-[0.4em] font-bold text-champagne/80 mb-10">{{ langService.t().footer.col1 }}</h5>
                    <ul class="space-y-5 text-xs text-gold-muted/60 font-light tracking-widest">
                        <li><a routerLink="/services" class="hover:text-champagne transition-colors duration-300 flex items-center gap-2 group"><span class="w-0 h-px bg-champagne transition-all duration-300 group-hover:w-3"></span>{{ langService.t().footer.col1Links[0] }}</a></li>
                        <li><a routerLink="/services" class="hover:text-champagne transition-colors duration-300 flex items-center gap-2 group"><span class="w-0 h-px bg-champagne transition-all duration-300 group-hover:w-3"></span>{{ langService.t().footer.col1Links[1] }}</a></li>
                        <li><a routerLink="/services" class="hover:text-champagne transition-colors duration-300 flex items-center gap-2 group"><span class="w-0 h-px bg-champagne transition-all duration-300 group-hover:w-3"></span>{{ langService.t().footer.col1Links[2] }}</a></li>
                        <li><a routerLink="/services" class="hover:text-champagne transition-colors duration-300 flex items-center gap-2 group"><span class="w-0 h-px bg-champagne transition-all duration-300 group-hover:w-3"></span>{{ langService.t().footer.col1Links[3] }}</a></li>
                    </ul>
                </div>

                <!-- Company Column -->
                <div>
                    <h5 class="text-[10px] uppercase tracking-[0.4em] font-bold text-champagne/80 mb-10">{{ langService.t().footer.col2 }}</h5>
                    <ul class="space-y-5 text-xs text-gold-muted/60 font-light tracking-widest">
                        <li><a routerLink="/about" class="hover:text-champagne transition-colors duration-300 flex items-center gap-2 group"><span class="w-0 h-px bg-champagne transition-all duration-300 group-hover:w-3"></span>{{ langService.t().footer.col2Links[0] }}</a></li>
                        <li><a routerLink="/careers" class="hover:text-champagne transition-colors duration-300 flex items-center gap-2 group"><span class="w-0 h-px bg-champagne transition-all duration-300 group-hover:w-3"></span>{{ langService.t().footer.col2Links[1] }}</a></li>
                        <li><a routerLink="/contact" class="hover:text-champagne transition-colors duration-300 flex items-center gap-2 group"><span class="w-0 h-px bg-champagne transition-all duration-300 group-hover:w-3"></span>{{ langService.t().footer.col2Links[2] }}</a></li>
                        <li><a routerLink="/legal" class="hover:text-champagne transition-colors duration-300 flex items-center gap-2 group"><span class="w-0 h-px bg-champagne transition-all duration-300 group-hover:w-3"></span>{{ langService.t().footer.col2Links[3] }}</a></li>
                    </ul>
                </div>
            </div>

            <div class="flex flex-col md:flex-row items-center justify-between pt-12 border-t border-white/5 gap-10">
                <div class="text-[9px] uppercase tracking-[0.3em] text-gold-muted/40 font-medium">
                    {{ langService.t().footer.copyright }}
                </div>
                <div class="flex gap-10 text-gold-muted/60 items-center">
                    <a href="https://www.linkedin.com/company/ads-danismanlik" target="_blank" rel="noopener noreferrer" class="hover:text-champagne transition-colors flex items-center gap-2">
                        <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                        </svg>
                        <span class="text-[9px] uppercase tracking-[0.3em] font-bold">LinkedIn</span>
                    </a>
                    <a routerLink="/legal" class="hover:text-champagne transition-colors text-[9px] uppercase tracking-[0.3em] font-bold">{{ langService.t().footer.legalLink }}</a>
                </div>
            </div>
        </div>
    </footer>
  `
})
export class FooterComponent {
    langService = inject(LanguageService);
}
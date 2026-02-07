import {
  Component,
  ChangeDetectionStrategy,
  inject,
  signal,
  AfterViewInit,
  OnDestroy,
  ElementRef,
  ViewChild,
  PLATFORM_ID
} from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { LanguageService } from '../../services/language.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-careers',
  standalone: true,
  imports: [CommonModule, RouterModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="bg-[#0b0f1a] min-h-screen overflow-hidden" #pageRef>

      <!-- ═══════════════════ HERO ═══════════════════ -->
      <section class="relative pt-44 pb-20 md:pt-52 md:pb-28 overflow-hidden">
        <div class="absolute top-[-15%] left-[10%] w-[500px] h-[500px] bg-champagne/[0.02] rounded-full blur-[160px] pointer-events-none"></div>

        <div class="max-w-[1200px] mx-auto px-6 md:px-10 relative z-10">
          <div class="hero-reveal flex items-center gap-4 mb-10" style="--delay: 0.1s">
            <div class="w-10 h-[1px] bg-champagne/50"></div>
            <span class="text-[9px] uppercase tracking-[0.5em] text-champagne/60 font-medium">{{ langService.t().careersPage.breadcrumb }}</span>
          </div>

          <div class="overflow-hidden mb-8">
            <h1 class="hero-reveal text-5xl sm:text-6xl md:text-7xl font-display font-black tracking-[-0.02em] leading-[0.9] text-white uppercase" style="--delay: 0.2s">
              {{ langService.t().careersPage.header }}
            </h1>
          </div>

          <div class="hero-reveal max-w-xl mb-12" style="--delay: 0.4s">
            <p class="text-base md:text-lg text-white/50 font-light leading-[1.8]">
              {{ langService.t().careersPage.subHeader }}
            </p>
          </div>

          <!-- LinkedIn CTA -->
          <div class="hero-reveal flex flex-wrap items-center gap-6" style="--delay: 0.55s">
            <a href="https://www.linkedin.com/company/ads-danismanlik" target="_blank" rel="noopener noreferrer"
               class="group inline-flex items-center gap-4 border border-[#0077B5]/40 hover:bg-[#0077B5] px-8 py-4 transition-all duration-500">
              <svg class="w-5 h-5 text-[#0077B5] group-hover:text-white transition-colors duration-500" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
              <span class="text-[10px] uppercase tracking-[0.2em] font-bold text-[#0077B5] group-hover:text-white transition-colors duration-500">{{ langService.t().careersPage.linkedinBtn }}</span>
            </a>
            <span class="text-[9px] uppercase tracking-[0.3em] text-white/20">{{ langService.t().careersPage.or }}</span>
            <a href="#application-form" class="text-[10px] uppercase tracking-[0.2em] font-bold text-champagne/60 hover:text-champagne transition-colors border-b border-champagne/20 hover:border-champagne/50 pb-1">
              {{ langService.t().careersPage.applyBelow }}
            </a>
          </div>
        </div>
      </section>


      <!-- ═══════════════════ WHY ADS ═══════════════════ -->
      <section class="max-w-[1200px] mx-auto px-6 md:px-10 py-20 scroll-reveal">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-[1px]">

          <div class="group bg-[#0d1120] p-10 md:p-12 min-h-[220px] flex flex-col border-t border-white/[0.04] hover:border-champagne/15 transition-all duration-500">
            <div class="w-11 h-11 border border-white/[0.08] group-hover:border-champagne/25 flex items-center justify-center mb-6 transition-all duration-500 group-hover:bg-champagne/[0.06]">
              <span class="material-symbols-outlined text-white/40 group-hover:text-champagne text-xl transition-all duration-500">trending_up</span>
            </div>
            <h3 class="text-lg font-bold text-white mb-3">{{ langService.t().careersPage.perk1Title }}</h3>
            <p class="text-[13px] text-white/35 leading-[1.8] font-light">{{ langService.t().careersPage.perk1Desc }}</p>
          </div>

          <div class="group bg-[#0d1120] p-10 md:p-12 min-h-[220px] flex flex-col border-t border-white/[0.04] hover:border-champagne/15 transition-all duration-500">
            <div class="w-11 h-11 border border-white/[0.08] group-hover:border-champagne/25 flex items-center justify-center mb-6 transition-all duration-500 group-hover:bg-champagne/[0.06]">
              <span class="material-symbols-outlined text-white/40 group-hover:text-champagne text-xl transition-all duration-500">groups</span>
            </div>
            <h3 class="text-lg font-bold text-white mb-3">{{ langService.t().careersPage.perk2Title }}</h3>
            <p class="text-[13px] text-white/35 leading-[1.8] font-light">{{ langService.t().careersPage.perk2Desc }}</p>
          </div>

          <div class="group bg-[#0d1120] p-10 md:p-12 min-h-[220px] flex flex-col border-t border-white/[0.04] hover:border-champagne/15 transition-all duration-500">
            <div class="w-11 h-11 border border-white/[0.08] group-hover:border-champagne/25 flex items-center justify-center mb-6 transition-all duration-500 group-hover:bg-champagne/[0.06]">
              <span class="material-symbols-outlined text-white/40 group-hover:text-champagne text-xl transition-all duration-500">location_on</span>
            </div>
            <h3 class="text-lg font-bold text-white mb-3">{{ langService.t().careersPage.perk3Title }}</h3>
            <p class="text-[13px] text-white/35 leading-[1.8] font-light">{{ langService.t().careersPage.perk3Desc }}</p>
          </div>
        </div>
      </section>


      <!-- ═══════════════════ APPLICATION FORM ═══════════════════ -->
      <section id="application-form" class="max-w-[1200px] mx-auto px-6 md:px-10 py-20 scroll-reveal">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-16">

          <!-- Left: Info -->
          <div>
            <div class="flex items-center gap-3 mb-8">
              <div class="w-8 h-[1px] bg-champagne/40"></div>
              <span class="text-[9px] uppercase tracking-[0.4em] text-champagne/50 font-medium">{{ langService.t().careersPage.formLabel }}</span>
            </div>
            <h2 class="text-3xl md:text-4xl font-display font-black text-white tracking-tight leading-[1.05] mb-6">
              {{ langService.t().careersPage.formTitle }}
            </h2>
            <p class="text-sm text-white/40 leading-[1.9] font-light mb-10 max-w-md">
              {{ langService.t().careersPage.formDesc }}
            </p>

            <div class="space-y-6 pt-8 border-t border-white/[0.05]">
              <div class="flex items-center gap-4">
                <span class="material-symbols-outlined text-champagne/50 text-lg">mail</span>
                <span class="text-sm text-white/50 font-light">kariyer&#64;adsdanismanlik.com.tr</span>
              </div>
              <div class="flex items-center gap-4">
                <span class="material-symbols-outlined text-champagne/50 text-lg">phone</span>
                <span class="text-sm text-white/50 font-light">+90 544 866 26 22</span>
              </div>
              <div class="flex items-center gap-4">
                <svg class="w-[18px] h-[18px] text-champagne/50" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
                <a href="https://www.linkedin.com/company/ads-danismanlik" target="_blank" rel="noopener noreferrer" class="text-sm text-white/50 font-light hover:text-champagne transition-colors">LinkedIn / ADS Danışmanlık</a>
              </div>
            </div>
          </div>

          <!-- Right: Form -->
          <div class="bg-[#0d1120] border border-white/[0.06] p-8 md:p-12">
            <form #careerForm (submit)="onSubmit(careerForm)" class="space-y-6">

              <div>
                <label class="block text-[9px] uppercase tracking-[0.3em] text-white/30 font-semibold mb-3">{{ langService.t().careersPage.inputName }}</label>
                <input type="text" name="name" required
                       class="w-full bg-transparent border-b border-white/[0.08] focus:border-champagne/40 text-white text-sm font-light py-3 px-4 outline-none transition-colors duration-300 placeholder:text-white/15"
                       [placeholder]="langService.t().careersPage.inputNamePh" />
              </div>

              <div>
                <label class="block text-[9px] uppercase tracking-[0.3em] text-white/30 font-semibold mb-3">{{ langService.t().careersPage.inputEmail }}</label>
                <input type="email" name="email" required
                       class="w-full bg-transparent border-b border-white/[0.08] focus:border-champagne/40 text-white text-sm font-light py-3 px-4 outline-none transition-colors duration-300 placeholder:text-white/15"
                       [placeholder]="langService.t().careersPage.inputEmailPh" />
              </div>

              <div>
                <label class="block text-[9px] uppercase tracking-[0.3em] text-white/30 font-semibold mb-3">{{ langService.t().careersPage.inputPhone }}</label>
                <input type="tel" name="phone"
                       class="w-full bg-transparent border-b border-white/[0.08] focus:border-champagne/40 text-white text-sm font-light py-3 px-4 outline-none transition-colors duration-300 placeholder:text-white/15"
                       [placeholder]="langService.t().careersPage.inputPhonePh" />
              </div>

              <div>
                <label class="block text-[9px] uppercase tracking-[0.3em] text-white/30 font-semibold mb-3">{{ langService.t().careersPage.inputPosition }}</label>
                <select name="position"
                        class="w-full bg-transparent border-b border-white/[0.08] focus:border-champagne/40 text-white/60 text-sm font-light py-3 px-4 outline-none transition-colors duration-300 appearance-none cursor-pointer"
                        style="background-image: none;">
                  <option value="" disabled selected class="bg-[#0d1120] text-white/40">{{ langService.t().careersPage.inputPositionPh }}</option>
                  <option value="auditor" class="bg-[#0d1120]">{{ langService.t().careersPage.posAuditor }}</option>
                  <option value="team_lead" class="bg-[#0d1120]">{{ langService.t().careersPage.posTeamLead }}</option>
                  <option value="field" class="bg-[#0d1120]">{{ langService.t().careersPage.posField }}</option>
                  <option value="office" class="bg-[#0d1120]">{{ langService.t().careersPage.posOffice }}</option>
                  <option value="other" class="bg-[#0d1120]">{{ langService.t().careersPage.posOther }}</option>
                </select>
              </div>

              <div>
                <label class="block text-[9px] uppercase tracking-[0.3em] text-white/30 font-semibold mb-3">{{ langService.t().careersPage.inputMessage }}</label>
                <textarea name="message" rows="4"
                          class="w-full bg-transparent border-b border-white/[0.08] focus:border-champagne/40 text-white text-sm font-light py-3 px-4 outline-none transition-colors duration-300 resize-none placeholder:text-white/15"
                          [placeholder]="langService.t().careersPage.inputMessagePh"></textarea>
              </div>

              <div class="flex items-start gap-3 pt-2">
                <input type="checkbox" name="kvkk" required
                       class="mt-1 accent-champagne w-4 h-4 cursor-pointer" />
                <label class="text-[11px] text-white/35 leading-[1.7] font-light">
                  {{ langService.t().careersPage.kvkkText }}
                  <a routerLink="/legal" class="text-champagne/60 hover:text-champagne underline transition-colors">{{ langService.t().careersPage.kvkkLink }}</a>
                </label>
              </div>

              <button type="submit"
                      class="group w-full border border-champagne/30 hover:bg-champagne text-champagne hover:text-[#0b0f1a] py-4 text-[10px] uppercase tracking-[0.3em] font-bold transition-all duration-500 flex items-center justify-center gap-3 mt-4">
                <span>{{ langService.t().careersPage.submitBtn }}</span>
                <span class="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform duration-300">east</span>
              </button>
            </form>

            @if (isSubmitted()) {
              <div class="mt-6 p-4 border border-green-500/20 bg-green-500/[0.05] text-center">
                <span class="text-sm text-green-400 font-light">{{ langService.t().careersPage.successMsg }}</span>
              </div>
            }
          </div>
        </div>
      </section>

    </div>
  `,
  styles: [`
    .hero-reveal {
      opacity: 0;
      transform: translateY(30px);
      animation: heroReveal 1s cubic-bezier(0.25, 1, 0.5, 1) forwards;
      animation-delay: var(--delay, 0s);
    }
    @keyframes heroReveal {
      to { opacity: 1; transform: translateY(0); }
    }
    .scroll-reveal {
      opacity: 0;
      transform: translateY(40px);
      transition: opacity 0.8s cubic-bezier(0.25, 1, 0.5, 1),
                  transform 0.8s cubic-bezier(0.25, 1, 0.5, 1);
    }
    .scroll-reveal.is-visible {
      opacity: 1;
      transform: translateY(0);
    }
  `]
})
export class CareersComponent implements AfterViewInit, OnDestroy {
  langService = inject(LanguageService);
  isSubmitted = signal(false);

  @ViewChild('pageRef') pageRef!: ElementRef;

  private isBrowser = isPlatformBrowser(inject(PLATFORM_ID));
  private observer: IntersectionObserver | null = null;

  ngAfterViewInit() {
    if (!this.isBrowser) return;
    this.observer = new IntersectionObserver(
      (entries) => entries.forEach(e => {
        if (e.isIntersecting) e.target.classList.add('is-visible');
      }),
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );
    setTimeout(() => {
      this.pageRef?.nativeElement?.querySelectorAll('.scroll-reveal')
        .forEach((el: Element) => this.observer?.observe(el));
    }, 100);
  }

  ngOnDestroy() {
    this.observer?.disconnect();
  }

  onSubmit(form: HTMLFormElement) {
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }
    this.isSubmitted.set(true);
    form.reset();
    setTimeout(() => this.isSubmitted.set(false), 5000);
  }
}
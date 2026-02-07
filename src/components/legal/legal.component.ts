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
  selector: 'app-legal',
  standalone: true,
  imports: [CommonModule, RouterModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="bg-[#0b0f1a] min-h-screen overflow-hidden" #pageRef>

      <!-- ═══════════════════ HERO ═══════════════════ -->
      <section class="relative pt-44 pb-16 md:pt-52 md:pb-20">
        <div class="max-w-[1000px] mx-auto px-6 md:px-10 relative z-10">
          <div class="hero-reveal flex items-center gap-4 mb-10" style="--delay: 0.1s">
            <div class="w-10 h-[1px] bg-champagne/50"></div>
            <span class="text-[9px] uppercase tracking-[0.5em] text-champagne/60 font-medium">{{ langService.t().legalPage.breadcrumb }}</span>
          </div>
          <h1 class="hero-reveal text-4xl sm:text-5xl md:text-6xl font-display font-black tracking-tight leading-[0.9] text-white uppercase mb-6" style="--delay: 0.2s">
            {{ langService.t().legalPage.header }}
          </h1>
          <p class="hero-reveal text-sm text-white/40 font-light" style="--delay: 0.35s">
            {{ langService.t().legalPage.lastUpdated }}
          </p>
        </div>
      </section>

      <!-- ═══════════════════ TAB NAVIGATION ═══════════════════ -->
      <section class="max-w-[1000px] mx-auto px-6 md:px-10 mb-16 scroll-reveal">
        <div class="flex items-center gap-0 border-b border-white/[0.06]">
          <button (click)="activeTab.set('kvkk')"
                  class="px-6 py-4 text-[10px] uppercase tracking-[0.3em] font-semibold transition-all duration-300 border-b-2 -mb-[2px]"
                  [class.text-champagne]="activeTab() === 'kvkk'"
                  [class.border-champagne]="activeTab() === 'kvkk'"
                  [class.text-white\/30]="activeTab() !== 'kvkk'"
                  [class.border-transparent]="activeTab() !== 'kvkk'">
            KVKK
          </button>
          <button (click)="activeTab.set('privacy')"
                  class="px-6 py-4 text-[10px] uppercase tracking-[0.3em] font-semibold transition-all duration-300 border-b-2 -mb-[2px]"
                  [class.text-champagne]="activeTab() === 'privacy'"
                  [class.border-champagne]="activeTab() === 'privacy'"
                  [class.text-white\/30]="activeTab() !== 'privacy'"
                  [class.border-transparent]="activeTab() !== 'privacy'">
            {{ langService.t().legalPage.tabPrivacy }}
          </button>
          <button (click)="activeTab.set('cookies')"
                  class="px-6 py-4 text-[10px] uppercase tracking-[0.3em] font-semibold transition-all duration-300 border-b-2 -mb-[2px]"
                  [class.text-champagne]="activeTab() === 'cookies'"
                  [class.border-champagne]="activeTab() === 'cookies'"
                  [class.text-white\/30]="activeTab() !== 'cookies'"
                  [class.border-transparent]="activeTab() !== 'cookies'">
            {{ langService.t().legalPage.tabCookies }}
          </button>
        </div>
      </section>

      <!-- ═══════════════════ CONTENT ═══════════════════ -->
      <section class="max-w-[1000px] mx-auto px-6 md:px-10 pb-32">

        @if (activeTab() === 'kvkk') {
          <div class="legal-content animate-fadeIn">
            <h2 class="text-2xl font-bold text-white mb-8">{{ langService.t().legalPage.kvkk.title }}</h2>
            <div class="space-y-8">
              <div>
                <h3 class="text-base font-semibold text-white/80 mb-3">{{ langService.t().legalPage.kvkk.s1Title }}</h3>
                <p class="text-sm text-white/40 leading-[2] font-light">{{ langService.t().legalPage.kvkk.s1Text }}</p>
              </div>
              <div>
                <h3 class="text-base font-semibold text-white/80 mb-3">{{ langService.t().legalPage.kvkk.s2Title }}</h3>
                <p class="text-sm text-white/40 leading-[2] font-light">{{ langService.t().legalPage.kvkk.s2Text }}</p>
              </div>
              <div>
                <h3 class="text-base font-semibold text-white/80 mb-3">{{ langService.t().legalPage.kvkk.s3Title }}</h3>
                <p class="text-sm text-white/40 leading-[2] font-light">{{ langService.t().legalPage.kvkk.s3Text }}</p>
              </div>
              <div>
                <h3 class="text-base font-semibold text-white/80 mb-3">{{ langService.t().legalPage.kvkk.s4Title }}</h3>
                <p class="text-sm text-white/40 leading-[2] font-light">{{ langService.t().legalPage.kvkk.s4Text }}</p>
              </div>
              <div>
                <h3 class="text-base font-semibold text-white/80 mb-3">{{ langService.t().legalPage.kvkk.s5Title }}</h3>
                <p class="text-sm text-white/40 leading-[2] font-light">{{ langService.t().legalPage.kvkk.s5Text }}</p>
              </div>
            </div>
          </div>
        }

        @if (activeTab() === 'privacy') {
          <div class="legal-content animate-fadeIn">
            <h2 class="text-2xl font-bold text-white mb-8">{{ langService.t().legalPage.privacy.title }}</h2>
            <div class="space-y-8">
              <div>
                <h3 class="text-base font-semibold text-white/80 mb-3">{{ langService.t().legalPage.privacy.s1Title }}</h3>
                <p class="text-sm text-white/40 leading-[2] font-light">{{ langService.t().legalPage.privacy.s1Text }}</p>
              </div>
              <div>
                <h3 class="text-base font-semibold text-white/80 mb-3">{{ langService.t().legalPage.privacy.s2Title }}</h3>
                <p class="text-sm text-white/40 leading-[2] font-light">{{ langService.t().legalPage.privacy.s2Text }}</p>
              </div>
              <div>
                <h3 class="text-base font-semibold text-white/80 mb-3">{{ langService.t().legalPage.privacy.s3Title }}</h3>
                <p class="text-sm text-white/40 leading-[2] font-light">{{ langService.t().legalPage.privacy.s3Text }}</p>
              </div>
            </div>
          </div>
        }

        @if (activeTab() === 'cookies') {
          <div class="legal-content animate-fadeIn">
            <h2 class="text-2xl font-bold text-white mb-8">{{ langService.t().legalPage.cookies.title }}</h2>
            <div class="space-y-8">
              <div>
                <h3 class="text-base font-semibold text-white/80 mb-3">{{ langService.t().legalPage.cookies.s1Title }}</h3>
                <p class="text-sm text-white/40 leading-[2] font-light">{{ langService.t().legalPage.cookies.s1Text }}</p>
              </div>
              <div>
                <h3 class="text-base font-semibold text-white/80 mb-3">{{ langService.t().legalPage.cookies.s2Title }}</h3>
                <p class="text-sm text-white/40 leading-[2] font-light">{{ langService.t().legalPage.cookies.s2Text }}</p>
              </div>
              <div>
                <h3 class="text-base font-semibold text-white/80 mb-3">{{ langService.t().legalPage.cookies.s3Title }}</h3>
                <p class="text-sm text-white/40 leading-[2] font-light">{{ langService.t().legalPage.cookies.s3Text }}</p>
              </div>
            </div>
          </div>
        }
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
      transform: translateY(30px);
      transition: opacity 0.8s ease, transform 0.8s ease;
    }
    .scroll-reveal.is-visible {
      opacity: 1;
      transform: translateY(0);
    }
    .animate-fadeIn {
      animation: fadeIn 0.5s ease forwards;
    }
    @keyframes fadeIn {
      from { opacity: 0; transform: translateY(10px); }
      to { opacity: 1; transform: translateY(0); }
    }
  `]
})
export class LegalComponent implements AfterViewInit, OnDestroy {
  langService = inject(LanguageService);
  activeTab = signal<'kvkk' | 'privacy' | 'cookies'>('kvkk');

  @ViewChild('pageRef') pageRef!: ElementRef;

  private isBrowser = isPlatformBrowser(inject(PLATFORM_ID));
  private observer: IntersectionObserver | null = null;

  ngAfterViewInit() {
    if (!this.isBrowser) return;
    this.observer = new IntersectionObserver(
      (entries) => entries.forEach(e => {
        if (e.isIntersecting) e.target.classList.add('is-visible');
      }),
      { threshold: 0.1 }
    );
    setTimeout(() => {
      this.pageRef?.nativeElement?.querySelectorAll('.scroll-reveal')
        .forEach((el: Element) => this.observer?.observe(el));
    }, 100);
  }

  ngOnDestroy() {
    this.observer?.disconnect();
  }
}
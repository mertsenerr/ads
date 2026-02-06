
import { Component, ChangeDetectionStrategy, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section class="min-h-screen bg-background-dark pt-32 pb-20 relative overflow-hidden">
        <!-- Hero Background Animation: Communications / Signals -->
        <div class="absolute inset-0 z-0 pointer-events-none">
            <img 
                src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=2070&auto=format&fit=crop" 
                alt="Digital Signals" 
                class="w-full h-full object-cover opacity-[0.12] scale-105 warm-studio-filter animate-[pulse_10s_ease-in-out_infinite]"
            />
            <div class="absolute inset-0 bg-gradient-to-b from-background-dark via-transparent to-background-dark"></div>
        </div>

        <!-- Decoration -->
        <div class="absolute top-0 right-0 w-1/2 h-full bg-[radial-gradient(ellipse_at_top_right,rgba(212,197,176,0.05),transparent_70%)] pointer-events-none"></div>
        <div class="watermark-text bottom-0 left-0 -translate-x-1/4 translate-y-1/4 opacity-5 select-none">Contact</div>

        <div class="max-w-7xl mx-auto px-6 relative z-10">
            <!-- Header -->
            <div class="mb-24">
                 <div class="flex items-center gap-4 mb-6 opacity-0 animate-[fadeIn_1s_ease-out_forwards]">
                   <span class="text-[10px] uppercase tracking-[0.4em] text-champagne font-bold">{{ langService.t().navbar.contact }}</span>
                </div>
                <h1 class="text-5xl md:text-8xl font-display font-bold text-platinum tracking-tighter leading-none mb-8 opacity-0 animate-[slideUp_1s_ease-out_0.3s_forwards]">
                    {{ langService.t().contactPage.header }}
                </h1>
                <p class="text-xl md:text-2xl font-light text-gold-muted/80 max-w-3xl leading-relaxed border-l-2 border-champagne/30 pl-8 opacity-0 animate-[fadeIn_1s_ease-out_0.6s_forwards]">
                    {{ langService.t().contactPage.subHeader }}
                </p>
            </div>

            <!-- Content -->
            <div class="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 opacity-0 animate-[fadeIn_1s_ease-out_0.9s_forwards]">
                
                <!-- Left Column: Info & Map -->
                <div class="lg:col-span-5 space-y-16">
                    
                    <!-- Google Maps Embed: IZMIR -->
                    <div class="w-full h-[300px] border border-champagne/10 relative overflow-hidden group">
                        <!-- Using filters to make the map look dark/architectural -->
                        <iframe 
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d200065.3965567305!2d26.93874012177579!3d38.41785890886561!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14bbd862a762cacd%3A0x628cbba1a59ce8fe!2sIzmir%2C%20T%C3%BCrkiye!5e0!3m2!1sen!2sus!4v1715426987512!5m2!1sen!2sus" 
                            width="100%" 
                            height="100%" 
                            style="border:0; filter: grayscale(100%) invert(90%) contrast(120%);" 
                            allowfullscreen="" 
                            loading="lazy" 
                            referrerpolicy="no-referrer-when-downgrade">
                        </iframe>
                        <div class="absolute inset-0 bg-champagne/10 pointer-events-none mix-blend-overlay"></div>
                    </div>

                    <div>
                        <h3 class="text-xs uppercase tracking-[0.3em] font-bold text-champagne mb-8 pb-4 border-b border-champagne/10">{{ langService.t().contactPage.infoTitle }}</h3>
                        
                        <div class="space-y-10">
                            <div>
                                <div class="flex items-center gap-3 text-gold-muted/50 mb-3">
                                    <span class="material-symbols-outlined text-sm">location_on</span>
                                    <span class="text-[9px] uppercase tracking-widest">{{ langService.t().contactPage.addressLabel }}</span>
                                </div>
                                <p class="text-white text-lg font-light leading-relaxed">{{ langService.t().contactPage.address }}</p>
                            </div>

                            <div>
                                <div class="flex items-center gap-3 text-gold-muted/50 mb-3">
                                    <span class="material-symbols-outlined text-sm">alternate_email</span>
                                    <span class="text-[9px] uppercase tracking-widest">{{ langService.t().contactPage.emailLabel }}</span>
                                </div>
                                <p class="text-white text-lg font-light tracking-wide">connect@ads-architecture.com</p>
                            </div>

                            <div>
                                <div class="flex items-center gap-3 text-gold-muted/50 mb-3">
                                    <span class="material-symbols-outlined text-sm">call</span>
                                    <span class="text-[9px] uppercase tracking-widest">{{ langService.t().contactPage.phoneLabel }}</span>
                                </div>
                                <p class="text-white text-lg font-light tracking-wide">+90 (232) 555-0199</p>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Right Column: Form -->
                <div class="lg:col-span-7">
                    <div class="bg-zinc-900/20 backdrop-blur-sm border border-champagne/10 p-10 md:p-14">
                        <h3 class="text-xs uppercase tracking-[0.3em] font-bold text-champagne mb-12 flex items-center gap-4">
                            <span class="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                            {{ langService.t().contactPage.formTitle }}
                        </h3>

                        <form class="space-y-12">
                            <div class="group">
                                <label class="block text-[9px] uppercase tracking-widest text-gold-muted/50 mb-3 group-focus-within:text-champagne transition-colors">{{ langService.t().contactPage.inputName }}</label>
                                <input type="text" class="w-full bg-transparent border-b border-white/10 text-white pb-3 focus:outline-none focus:border-champagne transition-colors duration-300 font-light placeholder-transparent" placeholder="Enter Name">
                            </div>

                            <div class="group">
                                <label class="block text-[9px] uppercase tracking-widest text-gold-muted/50 mb-3 group-focus-within:text-champagne transition-colors">{{ langService.t().contactPage.inputEmail }}</label>
                                <input type="email" class="w-full bg-transparent border-b border-white/10 text-white pb-3 focus:outline-none focus:border-champagne transition-colors duration-300 font-light placeholder-transparent" placeholder="Enter Email">
                            </div>

                            <div class="group">
                                <label class="block text-[9px] uppercase tracking-widest text-gold-muted/50 mb-3 group-focus-within:text-champagne transition-colors">{{ langService.t().contactPage.inputMessage }}</label>
                                <textarea rows="4" class="w-full bg-transparent border-b border-white/10 text-white pb-3 focus:outline-none focus:border-champagne transition-colors duration-300 font-light placeholder-transparent resize-none" placeholder="Enter Message"></textarea>
                            </div>

                            <div class="pt-4">
                                <button type="button" class="w-full bg-champagne text-obsidian-deep py-5 font-bold text-[10px] uppercase tracking-[0.3em] hover:bg-white transition-all duration-500 hover:shadow-[0_0_30px_rgba(212,197,176,0.2)]">
                                    {{ langService.t().contactPage.submitBtn }}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>

            </div>
        </div>
    </section>
  `
})
export class ContactComponent {
  langService = inject(LanguageService);
}

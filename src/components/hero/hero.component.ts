import { Component, ChangeDetectionStrategy, inject, signal } from '@angular/core';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-hero',
  standalone: true,
  templateUrl: './hero.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeroComponent {
  langService = inject(LanguageService);
  isTitleHovered = signal(false);
}
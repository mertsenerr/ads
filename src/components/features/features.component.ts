
import { Component, ChangeDetectionStrategy, inject } from '@angular/core';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-features',
  standalone: true,
  templateUrl: './features.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FeaturesComponent {
    langService = inject(LanguageService);
}

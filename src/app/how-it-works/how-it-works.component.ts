import { Component } from '@angular/core';
import { TranslateService, TranslateModule } from '@ngx-translate/core';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-how-it-works',
  standalone: true,
  imports: [NgFor, TranslateModule],
  templateUrl: './how-it-works.component.html',
})
export class HowItWorksComponent {
  steps: any[] = [];

  constructor(private translate: TranslateService) {
    this.translate.onLangChange.subscribe(() => this.loadSteps());
    this.loadSteps();
  }

  loadSteps() {
    const keys = ['listYourRide', 'connect', 'handoff', 'earnBadges'];
    const icons = ['fa-person-biking', 'fa-magnifying-glass', 'fa-handshake', 'fa-award'];
    const numbers = ['01', '02', '03', '04'];
    this.steps = keys.map((k, i) => ({
      faIcon: icons[i],
      number: numbers[i],
      title: this.translate.instant(`how-it-works.steps.${k}.title`),
      description: this.translate.instant(`how-it-works.steps.${k}.description`),
    }));
  }
}

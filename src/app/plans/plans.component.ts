import { Component } from '@angular/core';
import {NgClass, NgForOf} from "@angular/common";
import {TranslateModule} from "@ngx-translate/core";
import { TranslateService } from '@ngx-translate/core';


@Component({
  selector: 'app-plans',
  templateUrl: './plans.component.html',
  imports: [
    NgForOf,
    NgClass,
    TranslateModule
  ],
  standalone: true
})
export class PlansComponent {
  plans: any[] = [];

  constructor(private translate: TranslateService) {
    this.translate.onLangChange.subscribe(() => {
      this.loadPlans();
    });

    this.loadPlans();
  }

  loadPlans() {
    this.plans = [
      {
        title: this.translate.instant('plans.bronze.title'),
        price: this.translate.instant('plans.bronze.price'),
        features: [
          this.translate.instant('plans.bronze.features.publications'),
          this.translate.instant('plans.bronze.features.assistance')
        ],
        highlight: 'bg-amber-700'
      },
      {
        title: this.translate.instant('plans.silver.title'),
        price: this.translate.instant('plans.silver.price'),
        features: [
          this.translate.instant('plans.silver.features.publications'),
          this.translate.instant('plans.silver.features.assistance'),
          this.translate.instant('plans.silver.features.featuredPublications')
        ],
        highlight: 'bg-slate-400'
      },
      {
        title: this.translate.instant('plans.gold.title'),
        price: this.translate.instant('plans.gold.price'),
        features: [
          this.translate.instant('plans.gold.features.publications'),
          this.translate.instant('plans.gold.features.assistance')
        ],
        highlight: 'bg-yellow-500'
      }
    ];
  }
}


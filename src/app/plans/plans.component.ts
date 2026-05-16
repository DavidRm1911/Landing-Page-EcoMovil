import { Component } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-plans',
  standalone: true,
  imports: [NgFor, NgIf, TranslateModule],
  templateUrl: './plans.component.html',
})
export class PlansComponent {
  plans: any[] = [];

  constructor(private translate: TranslateService) {
    this.translate.onLangChange.subscribe(() => this.loadPlans());
    this.loadPlans();
  }

  loadPlans() {
    this.plans = [
      {
        tier: 'bronze',
        title: this.translate.instant('plans.bronze.title'),
        price: this.translate.instant('plans.bronze.price'),
        after: this.translate.instant('plans.bronze.after'),
        desc:  this.translate.instant('plans.bronze.desc'),
        features: [
          this.translate.instant('plans.bronze.features.publications'),
          this.translate.instant('plans.bronze.features.assistance'),
        ],
        cta: this.translate.instant('plans.bronze.cta'),
        color: 'var(--tier-bronze)',
        featured: false,
      },
      {
        tier: 'silver',
        title: this.translate.instant('plans.silver.title'),
        price: this.translate.instant('plans.silver.price'),
        after: this.translate.instant('plans.silver.after'),
        desc:  this.translate.instant('plans.silver.desc'),
        features: [
          this.translate.instant('plans.silver.features.publications'),
          this.translate.instant('plans.silver.features.assistance'),
          this.translate.instant('plans.silver.features.featuredPublications'),
        ],
        cta: this.translate.instant('plans.silver.cta'),
        color: 'var(--tier-silver)',
        featured: true,
      },
      {
        tier: 'gold',
        title: this.translate.instant('plans.gold.title'),
        price: this.translate.instant('plans.gold.price'),
        after: this.translate.instant('plans.gold.after'),
        desc:  this.translate.instant('plans.gold.desc'),
        features: [
          this.translate.instant('plans.gold.features.publications'),
          this.translate.instant('plans.gold.features.assistance'),
        ],
        cta: this.translate.instant('plans.gold.cta'),
        color: 'var(--tier-gold)',
        featured: false,
      },
    ];
  }

  onPlanSelect(_plan: any) {
    window.location.href = 'https://main.d6rnq0h4jt472.amplifyapp.com/login';
  }
}

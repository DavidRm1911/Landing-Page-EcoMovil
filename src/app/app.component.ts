import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { ProductDemoComponent } from './product-demo/product-demo.component';
import { StatsComponent } from './stats/stats.component';
import { HowItWorksComponent } from './how-it-works/how-it-works.component';
import { MarketplaceComponent } from './marketplace/marketplace.component';
import { WhocanuseComponent } from './whocanuse/whocanuse.component';
import { PlansComponent } from './plans/plans.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { FaqComponent } from './faq/faq.component';
import { AboutComponent } from './about/about.component';
import { JoinComponent } from './join/join.component';
import { FooterComponent } from './footer/footer.component';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HeaderComponent,
    MainComponent,
    ProductDemoComponent,
    StatsComponent,
    HowItWorksComponent,
    MarketplaceComponent,
    WhocanuseComponent,
    PlansComponent,
    TestimonialsComponent,
    FaqComponent,
    AboutComponent,
    JoinComponent,
    FooterComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  constructor(private router: Router, private translate: TranslateService) {
    this.translate.setDefaultLang('en');
  }

  ngOnInit() {
    this.translate.use('en');
    this.router.events.subscribe((event: any) => {
      if (event instanceof NavigationEnd) {
        const fragment = this.router.parseUrl(this.router.url).fragment;
        if (fragment) this.smoothScrollTo(fragment);
      }
    });
  }

  smoothScrollTo(fragment: string) {
    const element = document.getElementById(fragment);
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  }
}

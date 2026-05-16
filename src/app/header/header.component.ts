import { Component } from '@angular/core';
import {NavigationEnd, Router, RouterLink, RouterLinkActive, RouterOutlet} from "@angular/router";
import {JoinComponent} from "../join/join.component";
import {AboutComponent} from "../about/about.component";
import {FooterComponent} from "../footer/footer.component";
import {HowItWorksComponent} from "../how-it-works/how-it-works.component";
import {MainComponent} from "../main/main.component";
import {PlansComponent} from "../plans/plans.component";
import {WhocanuseComponent} from "../whocanuse/whocanuse.component";
import {LanguageSwitcherComponent} from "../public/components/language-switcher/language-switcher.component";
import {TranslateModule} from "@ngx-translate/core";


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    RouterLink,
    JoinComponent,
    RouterLinkActive,
    RouterOutlet,
    AboutComponent,
    FooterComponent,
    HowItWorksComponent,
    MainComponent,
    PlansComponent,
    WhocanuseComponent,
    LanguageSwitcherComponent,
    TranslateModule
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  redirectToExternalPage(){
    window.location.href = 'https://main.d6rnq0h4jt472.amplifyapp.com/login';
  }
  constructor(private router: Router) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        const tree = this.router.parseUrl(this.router.url);
        if(tree.fragment){
          const element = document.getElementById(tree.fragment);
          if(element){
            element.scrollIntoView({behavior: "smooth"});
          }
        }
      }
    })
  }
}

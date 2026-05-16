import { Component } from '@angular/core';
import { RouterLink } from "@angular/router";
import { LanguageSwitcherComponent } from "../public/components/language-switcher/language-switcher.component";
import { TranslateModule } from "@ngx-translate/core";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    RouterLink,
    LanguageSwitcherComponent,
    TranslateModule
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  redirectToExternalPage() {
    window.location.href = 'https://main.d6rnq0h4jt472.amplifyapp.com/login';
  }

  scrollTo(id: string) {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  }
}

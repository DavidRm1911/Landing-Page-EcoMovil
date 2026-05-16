import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { RouterLink } from '@angular/router';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [TranslateModule, RouterLink, NgFor],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {
  avatars = [
    { letter: 'A', color: 'var(--green-300)' },
    { letter: 'M', color: 'var(--emerald-400)' },
    { letter: 'J', color: 'var(--green-500, #22c55e)' },
    { letter: 'L', color: 'var(--emerald-200)' },
  ];

  redirectToExternalPage() {
    window.location.href = 'https://main.d6rnq0h4jt472.amplifyapp.com/login';
  }
}

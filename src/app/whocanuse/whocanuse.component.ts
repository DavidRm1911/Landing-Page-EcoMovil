import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { TranslateModule } from '@ngx-translate/core';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-whocanuse',
  standalone: true,
  imports: [MatCardModule, TranslateModule, NgFor],
  templateUrl: './whocanuse.component.html',
  styleUrl: './whocanuse.component.css'
})
export class WhocanuseComponent {
  bullets1 = ['whocanuse.bullet1a', 'whocanuse.bullet1b', 'whocanuse.bullet1c'];
  bullets2 = ['whocanuse.bullet2a', 'whocanuse.bullet2b', 'whocanuse.bullet2c'];

  redirectToExternalPage1() {
    window.location.href = 'https://main.d6rnq0h4jt472.amplifyapp.com/login';
  }
  redirectToExternalPage2() {
    window.location.href = 'https://main.d6rnq0h4jt472.amplifyapp.com/login';
  }
}

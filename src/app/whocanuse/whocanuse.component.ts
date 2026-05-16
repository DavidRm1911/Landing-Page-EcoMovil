import { Component } from '@angular/core';
import {MatCardModule} from "@angular/material/card";
import {MatButtonModule} from "@angular/material/button";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {TranslateModule} from "@ngx-translate/core";


// @ts-ignore
@Component({
  selector: 'app-whocanuse',
  standalone: true,
  imports: [MatCardModule, MatButtonModule, MatCardModule, MatCheckboxModule, TranslateModule],
  templateUrl: './whocanuse.component.html',
  styleUrl: './whocanuse.component.css'
})
export class WhocanuseComponent {
  redirectToExternalPage1() {
    window.location.href = 'https://main.d6rnq0h4jt472.amplifyapp.com/login';
  }
  redirectToExternalPage2() {
    window.location.href = 'https://main.d6rnq0h4jt472.amplifyapp.com/login';
  }
}

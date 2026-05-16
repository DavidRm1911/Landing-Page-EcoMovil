import { Component } from '@angular/core';
import {FormsModule} from "@angular/forms";
import {TranslateModule} from "@ngx-translate/core";

@Component({
  selector: 'app-join',
  standalone: true,
  imports: [
    FormsModule,
    TranslateModule
  ],
  templateUrl: './join.component.html',
  styleUrl: './join.component.css'
})
export class JoinComponent {
  email: string = '';
  redirectToExternalPage(){
    window.location.href = 'https://main.d6rnq0h4jt472.amplifyapp.com/login';
  }

  onSubmit() {
    if (this.email){
      console.log('Email submitted: ', this.email);
    }
  }
}

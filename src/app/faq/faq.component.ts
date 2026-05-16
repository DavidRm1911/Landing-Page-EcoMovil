import { Component } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-faq',
  standalone: true,
  imports: [NgFor, NgIf, TranslateModule],
  templateUrl: './faq.component.html',
})
export class FaqComponent {
  openIndex = 0;

  faqs = [
    { q: 'faq.q1', a: 'faq.a1' },
    { q: 'faq.q2', a: 'faq.a2' },
    { q: 'faq.q3', a: 'faq.a3' },
    { q: 'faq.q4', a: 'faq.a4' },
    { q: 'faq.q5', a: 'faq.a5' },
    { q: 'faq.q6', a: 'faq.a6' },
  ];

  toggle(i: number) {
    this.openIndex = this.openIndex === i ? -1 : i;
  }
}

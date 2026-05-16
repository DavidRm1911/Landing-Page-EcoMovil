import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-testimonials',
  standalone: true,
  imports: [NgFor, TranslateModule],
  templateUrl: './testimonials.component.html',
})
export class TestimonialsComponent {
  quotes = [
    {
      quote: 'testimonials.q1',
      name: 'Ana Reyes',
      role: 'testimonials.r1',
      city: 'Lima, Perú',
      initials: 'AR',
      color: 'var(--green-400)',
      stars: [1, 2, 3, 4, 5],
    },
    {
      quote: 'testimonials.q2',
      name: 'Mateo Hidalgo',
      role: 'testimonials.r2',
      city: 'Quito, Ecuador',
      initials: 'MH',
      color: 'var(--emerald-400)',
      stars: [1, 2, 3, 4, 5],
    },
    {
      quote: 'testimonials.q3',
      name: 'Jimena Acuña',
      role: 'testimonials.r3',
      city: 'Bogotá, Colombia',
      initials: 'JA',
      color: 'var(--green-500)',
      stars: [1, 2, 3, 4, 5],
    },
  ];
}

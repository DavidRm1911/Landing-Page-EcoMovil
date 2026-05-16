import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-stats',
  standalone: true,
  imports: [NgFor, TranslateModule],
  templateUrl: './stats.component.html',
})
export class StatsComponent {
  stats = [
    { value: '5,000+', label: 'main.stat1' },
    { value: '12',     label: 'main.stat2' },
    { value: '24,000+',label: 'main.stat3' },
    { value: '4.8★',   label: 'main.stat4' },
  ];
}

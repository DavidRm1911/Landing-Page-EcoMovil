import { Component } from '@angular/core';
import { NgFor, NgIf, NgClass } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-marketplace',
  standalone: true,
  imports: [NgFor, NgIf, NgClass, TranslateModule],
  templateUrl: './marketplace.component.html',
})
export class MarketplaceComponent {
  activeCategory = 'all';
  favorites = new Set([0, 2]);

  categories = [
    { key: 'all', label: 'marketplace.catAll', icon: 'fa-grip' },
    { key: 'bike', label: 'marketplace.catBike', icon: 'fa-bicycle' },
    { key: 'skates', label: 'marketplace.catSkates', icon: 'fa-shoe-prints' },
    { key: 'board', label: 'marketplace.catBoard', icon: 'fa-skating' },
    { key: 'ebike', label: 'marketplace.catEbike', icon: 'fa-bolt' },
  ];

  listings = [
    { tag: 'EN ALQUILER', title: 'Superfly Jump 27.5"', loc: 'San Isidro · Lima', rate: 4.9, n: 23, price: 'S/ 15', unit: '/ día', icon: 'fa-bicycle', bg: 'linear-gradient(135deg, var(--green-100), var(--emerald-100))', cat: 'bike' },
    { tag: 'EN VENTA', title: 'Patines Roces M12', loc: 'Miraflores · Lima', rate: 4.7, n: 11, price: 'S/ 240', unit: 'como nuevos', icon: 'fa-shoe-prints', bg: 'linear-gradient(135deg, var(--emerald-100), var(--green-200))', cat: 'skates' },
    { tag: 'EN ALQUILER', title: 'Longboard Sector 9 41"', loc: 'Surco · Lima', rate: 5.0, n: 8, price: 'S/ 8', unit: '/ día', icon: 'fa-snowboarding', bg: 'linear-gradient(135deg, var(--green-100), var(--emerald-50))', cat: 'board' },
    { tag: 'NUEVA', title: 'E-bike Lectric XP 3.0', loc: 'Barranco · Lima', rate: 4.8, n: 4, price: 'S/ 45', unit: '/ día', icon: 'fa-bolt', bg: 'linear-gradient(135deg, var(--green-200), var(--emerald-300))', cat: 'ebike' },
    { tag: 'EN ALQUILER', title: 'Cannondale Quick 4', loc: 'San Borja · Lima', rate: 4.9, n: 17, price: 'S/ 18', unit: '/ día', icon: 'fa-bicycle', bg: 'linear-gradient(135deg, var(--emerald-50), var(--green-100))', cat: 'bike' },
    { tag: 'EN VENTA', title: 'Scooter Xiaomi Pro 2', loc: 'La Molina · Lima', rate: 4.6, n: 6, price: 'S/ 1,450', unit: '6 meses uso', icon: 'fa-bolt', bg: 'linear-gradient(135deg, var(--green-100), var(--emerald-200))', cat: 'ebike' },
    { tag: 'POPULAR', title: 'Patines Rollerblade Zetra', loc: 'Magdalena · Lima', rate: 4.8, n: 14, price: 'S/ 10', unit: '/ día', icon: 'fa-shoe-prints', bg: 'linear-gradient(135deg, var(--emerald-200), var(--green-300))', cat: 'skates' },
    { tag: 'EN ALQUILER', title: 'Skate Element 8.0"', loc: 'San Miguel · Lima', rate: 4.7, n: 9, price: 'S/ 6', unit: '/ día', icon: 'fa-snowboarding', bg: 'linear-gradient(135deg, var(--green-50), var(--emerald-100))', cat: 'board' },
  ];

  get filtered() {
    return this.activeCategory === 'all'
      ? this.listings
      : this.listings.filter(l => l.cat === this.activeCategory);
  }

  toggleFav(i: number) {
    if (this.favorites.has(i)) this.favorites.delete(i);
    else this.favorites.add(i);
  }

  isFav(i: number) {
    return this.favorites.has(i);
  }

  onCta() {
    window.location.href = 'https://main.d6rnq0h4jt472.amplifyapp.com/login';
  }
}

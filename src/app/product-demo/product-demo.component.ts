import { Component, OnInit, OnDestroy, HostListener, ElementRef } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-product-demo',
  standalone: true,
  imports: [TranslateModule, NgFor],
  templateUrl: './product-demo.component.html',
})
export class ProductDemoComponent implements OnInit, OnDestroy {
  rotX = -8;
  rotY = -18;

  dragging = false;
  private lastX = 0;
  private lastY = 0;
  private autoOn = true;
  private rafId = 0;
  private lastTime = 0;

  readonly phoneDepth = 28;

  leftFeatures = [
    { icon: 'fa-bolt',           title: 'demo.f1title', desc: 'demo.f1desc' },
    { icon: 'fa-shield-halved',  title: 'demo.f2title', desc: 'demo.f2desc' },
    { icon: 'fa-location-dot',   title: 'demo.f3title', desc: 'demo.f3desc' },
  ];

  rightFeatures = [
    { icon: 'fa-comments',   title: 'demo.f4title', desc: 'demo.f4desc' },
    { icon: 'fa-star',       title: 'demo.f5title', desc: 'demo.f5desc' },
    { icon: 'fa-leaf',       title: 'demo.f6title', desc: 'demo.f6desc' },
  ];

  tabIcons = [
    { icon: 'fa-house',            active: true,  label: 'demo.tab1' },
    { icon: 'fa-magnifying-glass', active: false, label: 'demo.tab2' },
    { icon: 'fa-plus',             active: false, label: 'demo.tab3' },
    { icon: 'fa-heart',            active: false, label: 'demo.tab4' },
    { icon: 'fa-user',             active: false, label: 'demo.tab5' },
  ];

  miniCards = [
    { title: 'Superfly 27.5"',    loc: 'San Isidro', price: 'S/ 15',  rate: '4.9', icon: 'fa-bicycle',    bg: 'linear-gradient(135deg,var(--green-100),var(--emerald-100))' },
    { title: 'Patines Roces M12', loc: 'Miraflores', price: 'S/ 240', rate: '4.7', icon: 'fa-shoe-prints', bg: 'linear-gradient(135deg,var(--emerald-100),var(--green-200))' },
    { title: 'Longboard 41"',     loc: 'Surco',      price: 'S/ 8',   rate: '5.0', icon: 'fa-snowboarding',bg: 'linear-gradient(135deg,var(--green-100),var(--emerald-50))' },
  ];

  ngOnInit() {
    this.lastTime = performance.now();
    this.tick(this.lastTime);
  }

  ngOnDestroy() {
    cancelAnimationFrame(this.rafId);
  }

  private tick(now: number) {
    const dt = Math.min(now - this.lastTime, 60);
    this.lastTime = now;
    if (this.autoOn && !this.dragging) {
      this.rotY += dt * 0.012;
    }
    this.rafId = requestAnimationFrame((t) => this.tick(t));
  }

  onPhoneMouseDown(e: MouseEvent) {
    this.dragging = true;
    this.lastX = e.clientX;
    this.lastY = e.clientY;
  }

  onPhoneTouchStart(e: TouchEvent) {
    this.dragging = true;
    this.lastX = e.touches[0].clientX;
    this.lastY = e.touches[0].clientY;
  }

  @HostListener('window:mousemove', ['$event'])
  onMouseMove(e: MouseEvent) {
    if (!this.dragging) return;
    const dx = e.clientX - this.lastX;
    const dy = e.clientY - this.lastY;
    this.lastX = e.clientX;
    this.lastY = e.clientY;
    this.rotY += dx * 0.6;
    this.rotX = Math.max(-45, Math.min(45, this.rotX - dy * 0.4));
  }

  @HostListener('window:mouseup')
  onMouseUp() { this.dragging = false; }

  @HostListener('window:touchmove', ['$event'])
  onTouchMove(e: TouchEvent) {
    if (!this.dragging) return;
    const dx = e.touches[0].clientX - this.lastX;
    const dy = e.touches[0].clientY - this.lastY;
    this.lastX = e.touches[0].clientX;
    this.lastY = e.touches[0].clientY;
    this.rotY += dx * 0.6;
    this.rotX = Math.max(-45, Math.min(45, this.rotX - dy * 0.4));
  }

  @HostListener('window:touchend')
  onTouchEnd() { this.dragging = false; }

  reset() { this.rotX = -8; this.rotY = -18; }
  toggleAuto() { this.autoOn = !this.autoOn; }

  get phoneTransform() {
    return `rotateX(${this.rotX}deg) rotateY(${this.rotY}deg)`;
  }
}

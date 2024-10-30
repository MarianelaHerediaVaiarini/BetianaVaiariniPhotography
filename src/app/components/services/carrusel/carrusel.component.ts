import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { CardServiceInreface } from '../../../interfaces/card-service.interface';

@Component({
  selector: 'app-carrusel',
  templateUrl: './carrusel.component.html',
  styleUrls: ['./carrusel.component.css'],
})
export class CarruselComponent {
  @Input() servicesList: CardServiceInreface[] = [];
  @ViewChild('scrollContainer', { static: true }) scrollContainer: ElementRef | undefined;
  scrollProgress = 0;

  // Detectar el scroll
  onScroll(event: any) {
    const element = this.scrollContainer?.nativeElement;
    const scrollWidth = element.scrollWidth - element.clientWidth;
    const scrolled = (element.scrollLeft / scrollWidth) * 100;
    this.scrollProgress = scrolled;
  }
}



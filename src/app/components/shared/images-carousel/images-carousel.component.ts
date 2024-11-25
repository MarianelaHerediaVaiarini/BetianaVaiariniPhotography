import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-images-carousel',
  templateUrl: './images-carousel.component.html',
})
export class ImagesCarouselComponent {
  @Input() imageNames: string[] = [];
  protected currentIndex = 0;

  nextSlide() {
    this.currentIndex = (this.currentIndex + 1) % this.imageNames.length;
  }

  prevSlide() {
    this.currentIndex =
      (this.currentIndex - 1 + this.imageNames.length) % this.imageNames.length;
  }

  goToSlide(index: number) {
    this.currentIndex = index;
  }
}

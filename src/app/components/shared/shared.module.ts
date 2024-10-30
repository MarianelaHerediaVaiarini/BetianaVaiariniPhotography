import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlertComponent } from './alert/alert.component';
import { ImagesCarouselComponent } from './images-carousel/images-carousel.component';

@NgModule({
  declarations: [AlertComponent, ImagesCarouselComponent],
  imports: [CommonModule],
  exports: [AlertComponent, ImagesCarouselComponent],
})
export class SharedModule {}

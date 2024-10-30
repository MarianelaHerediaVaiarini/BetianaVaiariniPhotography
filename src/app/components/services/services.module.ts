import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServicesComponent } from './services.component';
import { CardComponent } from './card/card.component';
import { RouterModule } from '@angular/router';
import { CarruselComponent } from './carrusel/carrusel.component';
import { ServiceContentComponent } from './service-content/service-content.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    ServicesComponent,
    CardComponent,
    CarruselComponent,
    ServiceContentComponent,
  ],
  imports: [CommonModule, RouterModule, SharedModule],
  exports: [CardComponent, CarruselComponent, ServiceContentComponent],
})
export class ServicesModule {}

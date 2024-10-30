import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KidsComponent } from './kids.component';
import { ServicesModule } from '../services/services.module';

@NgModule({
  declarations: [KidsComponent],
  imports: [CommonModule, ServicesModule],
})
export class KidsModule {}

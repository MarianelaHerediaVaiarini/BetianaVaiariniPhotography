import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BabyComponent } from './baby.component';
import { SharedModule } from '../shared/shared.module';
import { ServicesModule } from '../services/services.module';

@NgModule({
  declarations: [BabyComponent],
  imports: [CommonModule, SharedModule, ServicesModule],
})
export class BabyModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaternityComponent } from './maternity.component';
import { ServicesModule } from '../services/services.module';

@NgModule({
  declarations: [MaternityComponent],
  imports: [CommonModule, ServicesModule],
})
export class MaternityModule {}

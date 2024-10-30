import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FamilyComponent } from './family.component';
import { ServicesModule } from '../services/services.module';

@NgModule({
  declarations: [FamilyComponent],
  imports: [CommonModule, ServicesModule],
})
export class FamilyModule {}

import { Component } from '@angular/core';
import { itemsBaby } from '../../utils/included-items.utils';

@Component({
  selector: 'app-baby',
  templateUrl: './baby.component.html',
})
export class BabyComponent {
  protected imageNames: string[] = [
    'kids/image1.jpg',
    'kids/image2.jpg',
    'kids/image3.jpg',
  ];
  protected includedItems: string[]= itemsBaby
}

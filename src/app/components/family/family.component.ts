import { Component } from '@angular/core';
import { itemsFamily } from '../../utils/included-items.utils';

@Component({
  selector: 'app-family',
  templateUrl: './family.component.html',
})
export class FamilyComponent {
  protected imageNames: string[] = [
    'kids/image1.jpg',
    'kids/image2.jpg',
    'kids/image3.jpg',
  ];
  protected includedItems: string[]= itemsFamily
}

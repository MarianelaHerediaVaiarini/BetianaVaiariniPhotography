import { Component } from '@angular/core';
import { itemsMaternity } from '../../utils/included-items.utils';

@Component({
  selector: 'app-maternity',
  templateUrl: './maternity.component.html',
})
export class MaternityComponent {
  protected imageNames: string[] = [
    'kids/image1.jpg',
    'kids/image2.jpg',
    'kids/image3.jpg',
  ];
  protected includedItems: string[] = itemsMaternity;
}

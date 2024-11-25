import { Component } from '@angular/core';
import { itemsKids } from '../../utils/included-items.utils';

@Component({
  selector: 'app-kids',
  templateUrl: './kids.component.html',
})
export class KidsComponent {
  protected imageNames: string[] = [
    'kids/image1.jpg',
    'kids/image2.jpg',
    'kids/image3.jpg',
  ];
  protected includedItems: string[] = itemsKids;
}

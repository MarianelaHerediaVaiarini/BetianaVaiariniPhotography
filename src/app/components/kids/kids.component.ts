import { Component } from '@angular/core';

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
}

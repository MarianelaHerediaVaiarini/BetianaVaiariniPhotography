import { Component } from '@angular/core';

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
}

import { Component } from '@angular/core';

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
}

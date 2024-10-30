import { Component } from '@angular/core';

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
}

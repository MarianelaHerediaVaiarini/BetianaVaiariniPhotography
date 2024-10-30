import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-service-content',
  templateUrl: './service-content.component.html',
})
export class ServiceContentComponent {
  @Input() imageNames: string[] = [];
  @Input() title: string = '';
  @Input() textData: string = '';
}

import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-service-content',
  templateUrl: './service-content.component.html',
})
export class ServiceContentComponent {
  @Input() imageNames: string[] = [];
  @Input() title: string = '';
  @Input() textData: string = '';
  @Input() includedItems: string[] = [];
  constructor(private router: Router) {}
  onClick() {
    this.router.navigate([`/contact`]);
  }
}

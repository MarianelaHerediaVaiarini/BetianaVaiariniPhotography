import { Component } from '@angular/core';
import { availableServices } from '../../utils/services.utils';
import { CardServiceInreface } from '../../interfaces/card-service.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent {
protected servicesList: CardServiceInreface[] = availableServices()
}

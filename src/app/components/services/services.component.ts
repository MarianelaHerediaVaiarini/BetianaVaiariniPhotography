import { Component } from '@angular/core';
import { CardServiceInreface } from '../../interfaces/card-service.interface';
import { availableServices } from '../../utils/services.utils';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
})
export class ServicesComponent {
  protected servicesList: CardServiceInreface[] = availableServices()

}

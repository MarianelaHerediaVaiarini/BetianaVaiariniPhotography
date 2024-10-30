import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { CardServiceInreface } from '../../../interfaces/card-service.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
})
export class CardComponent implements OnChanges{
  @Input() objectCard: CardServiceInreface = {} as CardServiceInreface
  protected imageUrl: string = ''

  constructor(private router: Router){}

  ngOnInit(){
    this.imageUrl = `/assets/images/${this.objectCard.image}`
  }
  ngOnChanges(changes: SimpleChanges){
    if (changes['objectCard'] && changes['objectCard'].currentValue) {
      this.imageUrl = `/assets/images/${this.objectCard.image}`;
    }
  }
  onClick(){
    this.router.navigate([`/services/${this.objectCard.urlRedirect}`]);
  }

}

import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
})
export class FooterComponent {
protected icons: {name:string, url: string}[] = [
  {name:'assets/icons/facebook.svg', url: 'https://www.facebook.com/cascaphotography'}, {name:'assets/icons/instagram.svg', url: 'https://www.instagram.com/cascaphotography?igsh=MWRhYm93c2wwaWs3Zw=='}, {name: 'assets/icons/whatsapp.svg', url: 'https://wa.me/34613644940?text=Hola!%20Me%20gustaria%20recibir%20informaci%C3%B3n%20sobre%20...'}]
}

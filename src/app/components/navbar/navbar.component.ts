import { Component } from '@angular/core';
import { NavbarInterface } from '../../interfaces/navbar.interface';
import {  Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
})
export class NavbarComponent {
protected list: NavbarInterface[] = [
  {
    link: '/home',
    label: 'Inicio',
    active: false
  },
  {
    link: '/services',
    label: 'Servicios',
    active: false
  },
  {
    link: 'about-me',
    label: 'Sobre mí',
    active: false
  },
  {
    link: 'contact',
    label: 'Contacto',
    active: false
  }
]
isNavbarOpen = false; // Variable para controlar el estado del menú
constructor(private router: Router){}
toggleNavbar(): void {
  this.isNavbarOpen = !this.isNavbarOpen;
}

onNavClick(link: string): void {
  console.log('Navigating to:', link);
   this.router.navigate([link]);
   this.toggleNavbar()
}

trackByIndex(index: number): number {
  return index;
}
}

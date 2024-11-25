import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ServicesComponent } from './components/services/services.component';
import { ContactComponent } from './components/contact/contact.component';
import { BabyComponent } from './components/baby/baby.component';
import { KidsComponent } from './components/kids/kids.component';
import { FamilyComponent } from './components/family/family.component';
import { MaternityComponent } from './components/maternity/maternity.component';
import { AboutMeComponent } from './components/about-me/about-me.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'about-me', component: AboutMeComponent },
  { path: 'services/baby', component: BabyComponent },
  { path: 'services/kids', component: KidsComponent },
  { path: 'services/family', component: FamilyComponent },
  { path: 'services/maternity', component: MaternityComponent },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

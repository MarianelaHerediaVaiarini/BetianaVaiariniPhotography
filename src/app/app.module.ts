import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { NavbarModule } from './components/navbar/navbar.module';
import { HomeModule } from './components/home/home.module';
import { ServicesModule } from './components/services/services.module';
import { FooterModule } from './components/footer/footer.module';
import { ContactModule } from './components/contact/contact.module';
import { FormsModule } from '@angular/forms';
import { SharedModule } from './components/shared/shared.module';
import { BabyModule } from './components/baby/baby.module';
import { KidsModule } from './components/kids/kids.module';
import { FamilyModule } from './components/family/family.module';
import { MaternityModule } from './components/maternity/maternity.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NavbarModule,
    HomeModule,
    ServicesModule,
    FooterModule,
    ContactModule,
    FormsModule,
    SharedModule,
    BabyModule,
    KidsModule,
    FamilyModule,
    MaternityModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

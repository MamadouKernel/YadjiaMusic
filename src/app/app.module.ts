import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavsComponent } from './composants/navs/navs.component';
import { FooterComponent } from './composants/footer/footer.component';
import { HomeComponent } from './composants/home/home.component';
import { ContactComponent } from './composants/contact/contact.component';
import { AboutComponent } from './composants/about/about.component';
import { PortfolioComponent } from './composants/portfolio/portfolio.component';
import { PistesComponent } from './composants/pistes/pistes.component';

@NgModule({
  declarations: [
    AppComponent,
    NavsComponent,
    FooterComponent,
    HomeComponent,
    ContactComponent,
    AboutComponent,
    PortfolioComponent,
    PistesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

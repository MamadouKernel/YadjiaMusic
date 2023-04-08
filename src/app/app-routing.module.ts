import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './composants/home/home.component';
import { AboutComponent } from './composants/about/about.component';
import { ContactComponent } from './composants/contact/contact.component';
import { PistesComponent } from './composants/pistes/pistes.component';

const routes: Routes = [
  { path: '', redirectTo: '/Accueil', pathMatch: 'full' },
  { path: 'Accueil', component: HomeComponent },
  {path:'Apropos', component: AboutComponent},
  {path:'Contact', component:ContactComponent},
  {path:'pistes', component: PistesComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

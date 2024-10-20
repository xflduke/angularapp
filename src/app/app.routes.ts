import { Routes } from '@angular/router';
import { HomeComponent } from './page/home/home.component';
import { AppComponent } from './app.component';

export const routes: Routes = [
  { 'path' : '', component: HomeComponent},
  { 'path' : 'home', component: HomeComponent},
];

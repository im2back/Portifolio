import { Routes } from '@angular/router';
import { HomeComponentComponent } from './homepage/home-component/home-component.component';
import { FotosComponent } from './certificados/fotos/fotos.component';

export const routes: Routes = [

 {
  path: 'home',
  component: HomeComponentComponent
 },
 {
  path: 'certificados',
  component: FotosComponent
 },
 {
  path: '**',
  component: HomeComponentComponent
 },

];

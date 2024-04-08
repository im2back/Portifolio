import { Routes } from '@angular/router';
import { HomeComponentComponent } from './homepage/home-component/home-component.component';
import { FrontendComponent } from './certificados/frontend/frontend.component';
import { BackendComponent } from './certificados/backend/backend.component';
import { FerramentasComponent } from './certificados/ferramentas/ferramentas.component';
import { ProjetosComponent } from './projetos/projetos.component';


export const routes: Routes = [

 {
  path: 'home',
  component: HomeComponentComponent
 },

 {
  path: 'certificados-front',
  component: FrontendComponent
 },

 {
  path: 'certificados-back',
  component: BackendComponent
 },

 {
  path: 'certificados-ferramentas',
  component: FerramentasComponent
 },

 {
  path: 'projetos',
  component: ProjetosComponent
 },

 {
  path: '**',
  component: HomeComponentComponent
 },


];

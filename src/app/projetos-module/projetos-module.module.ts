import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QualificacoesComponentComponent } from './qualificacoes-component/qualificacoes-component.component';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,QualificacoesComponentComponent
  ],
  exports:[QualificacoesComponentComponent]
})
export class ProjetosModuleModule { }

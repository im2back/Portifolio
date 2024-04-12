import { Component } from '@angular/core';
import { NavbarComponent } from '../../core/navbar/navbar.component';
import { QualificacoesComponentComponent } from '../qualificacoes-component/qualificacoes-component.component';
import { DescricaoComponentComponent } from '../descricao-component/descricao-component.component';

@Component({
  selector: 'app-projetos',
  standalone: true,
  imports: [NavbarComponent,QualificacoesComponentComponent,DescricaoComponentComponent],
  templateUrl: './projetos.component.html',
  styleUrl: './projetos.component.css'
})
export class ProjetosComponent {

}

import { Component ,} from '@angular/core';
import { NavbarComponent } from '../../core/navbar/navbar.component';
import { DesafiosComponentComponent } from '../desafios-component/desafios-component.component';
import { CommonModule } from '@angular/common';
import { CardTecnologyComponent } from '../card-tecnology/card-tecnology.component';
import { ProjetoCadernetaComponent } from '../projeto-caderneta/projeto-caderneta.component';
import { ProjetoCreditapraiserComponent } from '../projeto-creditapraiser/projeto-creditapraiser.component';

@Component({
  selector: 'app-projetos',
  standalone: true,
  imports: [NavbarComponent,DesafiosComponentComponent,CommonModule,CardTecnologyComponent,ProjetoCadernetaComponent,ProjetoCreditapraiserComponent],
  templateUrl: './projetos.component.html',
  styleUrl: './projetos.component.css'
})
export class ProjetosComponent {


}

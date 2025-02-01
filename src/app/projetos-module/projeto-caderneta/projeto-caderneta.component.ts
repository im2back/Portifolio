import { Component} from '@angular/core';
import { CardTecnologyComponent } from '../card-tecnology/card-tecnology.component';
import { DesafiosComponentComponent } from '../desafios-component/desafios-component.component';


@Component({
  selector: 'app-projeto-caderneta',
  standalone: true,
  imports: [CardTecnologyComponent,DesafiosComponentComponent],
  templateUrl: './projeto-caderneta.component.html',
  styleUrl: './projeto-caderneta.component.css'
})
export class ProjetoCadernetaComponent {


}

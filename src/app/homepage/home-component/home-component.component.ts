import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BadgeModule } from 'primeng/badge';
import { ButtonModule } from 'primeng/button';
import { FooterComponent } from '../footer/footer.component';
import { CabecalhoComponent } from '../cabecalho/cabecalho.component';
import { MenuComponent } from '../menu/menu.component';
import { DescricaoComponent } from '../descricao/descricao.component';
import { CommonModule } from '@angular/common';
import { EmailComponent } from '../email/email.component';



@Component({
  selector: 'app-home-component',
  standalone: true,
  imports: [RouterOutlet,BadgeModule,ButtonModule,FooterComponent,
    CabecalhoComponent,MenuComponent,DescricaoComponent,CommonModule,EmailComponent],
  templateUrl: './home-component.component.html',
  styleUrl: './home-component.component.css'
})
export class HomeComponentComponent {

}

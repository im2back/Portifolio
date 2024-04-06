import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BadgeModule } from 'primeng/badge';
import { ButtonModule } from 'primeng/button';
import { FooterComponent } from './homepage/footer/footer.component';
import { CabecalhoComponent } from './homepage/cabecalho/cabecalho.component';
import { MenuComponent } from './homepage/menu/menu.component';
import { DescricaoComponent } from './homepage/descricao/descricao.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,BadgeModule,ButtonModule,FooterComponent,CabecalhoComponent,MenuComponent,DescricaoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'portifolio';
}

import { RouterOutlet } from '@angular/router';
import { Component } from '@angular/core';
import { ProjetosModuleModule } from './projetos-module/projetos-module.module';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,ProjetosModuleModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'portifolio';
}

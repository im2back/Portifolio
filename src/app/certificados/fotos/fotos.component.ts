import { Component, HostListener } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { Certificado } from './interfaces/Certificado';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { NavbarComponent } from '../../navbar/navbar.component';


@Component({
  selector: 'app-fotos',
  standalone: true,
  imports: [RouterOutlet,CardModule,ButtonModule,FormsModule,CommonModule,RouterLink,NavbarComponent],
  templateUrl: './fotos.component.html',
  styleUrl: './fotos.component.css'
})
export class FotosComponent {


  lista: Certificado[]= [
    {
      header : "ANGULAR",
      subheader:"Front-end",
      urlDaimagem : "https://im2back.github.io/Portifolio/assets/certificados/Angular.png",
      urlDoCertificado: "https://cursos.alura.com.br/certificate/37b738d5-32dd-4f31-9523-b3e75bf7969f?lang=pt_BR"
    },
    {
      header : "HTML E CSS - 1",
      subheader:"Front-end",
      urlDaimagem : "https://im2back.github.io/Portifolio/assets/certificados/Angular.png",
      urlDoCertificado: "https://cursos.alura.com.br/certificate/e398d487-e79e-49b8-9581-1169632c19e1?lang=pt_BR"
    },
    {
      header : "HTML E CSS - 2",
      subheader:"Front-end",
      urlDaimagem : "https://im2back.github.io/Portifolio/assets/certificados/Angular.png",
      urlDoCertificado: "https://cursos.alura.com.br/certificate/3ca11c1a-c16d-488c-8025-09111583a244?lang=pt_BR"
    },
    {
      header : "HTTP",
      subheader:"Util",
      urlDaimagem : "https://im2back.github.io/Portifolio/assets/certificados/Angular.png",
      urlDoCertificado: "https://cursos.alura.com.br/certificate/fed33b12-ad92-4b16-bee4-d4cc969d3841?lang=pt_BR"
    }


  ];

}

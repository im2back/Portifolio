import { Component, HostListener } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { Certificado } from '../interfaces/Certificado';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { NavbarComponent } from '../../core/navbar/navbar.component';

@Component({
  selector: 'app-frontend',
  standalone: true,
  imports: [RouterOutlet,CardModule,ButtonModule,FormsModule,CommonModule,RouterLink,NavbarComponent],
  templateUrl: './frontend.component.html',
  styleUrl: './frontend.component.css'
})
export class FrontendComponent {

  lista: Certificado[]= [
    {
      header : "Mobile",
      subheader:"Front-end",
      urlDaimagem : "https://im2back.github.io/Portifolio/assets/certificados/Mobile.png",
      urlDoCertificado: "https://certificados.descomplica.com.br/graduacao/d10537e955c676ac809470e4075efe931d2053db509aca57c03148dd73e64a65"
    },

    {
      header : "ANGULAR",
      subheader:"Front-end",
      urlDaimagem : "https://im2back.github.io/Portifolio/assets/certificados/Angular.png",
      urlDoCertificado: "https://cursos.alura.com.br/certificate/37b738d5-32dd-4f31-9523-b3e75bf7969f?lang=pt_BR"
    },

    {
      header : "HTML E CSS - 1",
      subheader:"Front-end",
      urlDaimagem : "https://im2back.github.io/Portifolio/assets/certificados/HtmleCss.png",
      urlDoCertificado: "https://cursos.alura.com.br/certificate/e398d487-e79e-49b8-9581-1169632c19e1?lang=pt_BR"
    },

    {
      header : "HTML E CSS - 2",
      subheader:"Front-end",
      urlDaimagem : "https://im2back.github.io/Portifolio/assets/certificados/HtmleCss-2.png",
      urlDoCertificado: "https://cursos.alura.com.br/certificate/3ca11c1a-c16d-488c-8025-09111583a244?lang=pt_BR"
    },

    {
      header : "HTTP",
      subheader:"Util",
      urlDaimagem : "https://im2back.github.io/Portifolio/assets/certificados/Http.png",
      urlDoCertificado: "https://cursos.alura.com.br/certificate/fed33b12-ad92-4b16-bee4-d4cc969d3841?lang=pt_BR"
    }
    ,
    {
      header : "Java Script",
      subheader:"Front-end",
      urlDaimagem : "https://im2back.github.io/Portifolio/assets/certificados/JavaScript.png",
      urlDoCertificado: "https://cursos.alura.com.br/degree/certificate/6e70d6a0-3a84-4d59-a21e-647102a3f943?lang=pt_BR"
    }
    ,
    {
      header : "Type Script",
      subheader:"Front-end",
      urlDaimagem : "https://im2back.github.io/Portifolio/assets/certificados/TypeScript.png",
      urlDoCertificado: "https://cursos.alura.com.br/certificate/01205f69-3948-4908-83b0-9d8a8d3471ec?lang=pt_BR"
    }

  ];

}

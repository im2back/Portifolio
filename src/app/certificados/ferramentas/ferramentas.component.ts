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
  selector: 'app-ferramentas',
  standalone: true,
  imports: [RouterOutlet,CardModule,ButtonModule,FormsModule,CommonModule,RouterLink,NavbarComponent],
  templateUrl: './ferramentas.component.html',
  styleUrl: './ferramentas.component.css'
})
export class FerramentasComponent {


  lista: Certificado[]= [
    {
      header : "Docker",
      subheader:"Ferramentas",
      urlDaimagem : "https://im2back.github.io/Portifolio/assets/certificados/Docker.png",
      urlDoCertificado: "https://cursos.alura.com.br/certificate/f61d832f-7470-40dc-a111-0088afb515fc?lang=pt_BR"
    },
    {
      header : "Git - GitHub",
      subheader:"Ferramentas",
      urlDaimagem : "https://im2back.github.io/Portifolio/assets/certificados/Git.png",
      urlDoCertificado: "https://cursos.alura.com.br/certificate/f97e0dc7-923c-409e-88ad-0f2ec67c3290?lang=pt_BR"
    },
    {
      header : "Linux",
      subheader:"Ferramentas",
      urlDaimagem : "https://im2back.github.io/Portifolio/assets/certificados/Linux.png",
      urlDoCertificado: "https://cursos.alura.com.br/certificate/132e0647-f9c6-4640-be45-8813bfaf4be7?lang=pt_BR"
    },
    {
      header : "CMD",
      subheader:"Ferramentas",
      urlDaimagem : "https://im2back.github.io/Portifolio/assets/certificados/cmd.png",
      urlDoCertificado: "https://cursos.alura.com.br/certificate/8de879e6-0689-46cf-a6e5-96404d2e693e?lang=pt_BR"
    },
    {
      header : "HTTP",
      subheader:"Util",
      urlDaimagem : "https://im2back.github.io/Portifolio/assets/certificados/Http.png",
      urlDoCertificado: "https://cursos.alura.com.br/certificate/fed33b12-ad92-4b16-bee4-d4cc969d3841?lang=pt_BR"
    }
    ,
    {
      header : "Jenkins - 1",
      subheader:"Ferramentas",
      urlDaimagem : "https://im2back.github.io/Portifolio/assets/certificados/Jenkins-1.png",
      urlDoCertificado: "https://cursos.alura.com.br/certificate/eeca8c71-edc7-48fd-94fd-465145cf506b?lang=pt_BR"
    }
    ,
    {
      header : "Jenkins - 2",
      subheader:"Ferramentas",
      urlDaimagem : "https://im2back.github.io/Portifolio/assets/certificados/Jenkins-2.png",
      urlDoCertificado: "https://cursos.alura.com.br/certificate/67875b56-9c51-4b90-b133-05fae01bf5d0?lang=pt_BR"
    }
    ,
    {
      header : "CI",
      subheader:"Ferramentas",
      urlDaimagem : "https://im2back.github.io/Portifolio/assets/certificados/CI.png",
      urlDoCertificado: "https://cursos.alura.com.br/certificate/dde7b20b-4e39-438d-9a89-da3ca27c9321?lang=pt_BR"
    }
  ];

}

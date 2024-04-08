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
  selector: 'app-backend',
  standalone: true,
  imports: [RouterOutlet,CardModule,ButtonModule,FormsModule,CommonModule,RouterLink,NavbarComponent],
  templateUrl: './backend.component.html',
  styleUrl: './backend.component.css'
})
export class BackendComponent {

  lista: Certificado[]= [
    {
      header : "Programming Basics",
      subheader:"Back-end",
      urlDaimagem : "https://im2back.github.io/Portifolio/assets/certificados/ProgammingBasic.png",
      urlDoCertificado: "https://certificados.descomplica.com.br/graduacao/3ea4a0b83bd603fb2c6f10cd14c5e1186bf0c967b72c818a3be8e2ea1c283874"
    },
    {
      header : "POO - JAVA",
      subheader:"Back-end",
      urlDaimagem : "https://im2back.github.io/Portifolio/assets/certificados/POO-Descomplica.png",
      urlDoCertificado: "https://certificados.descomplica.com.br/graduacao/ffabb97cb6543229bea25beb92083d4bdd36499e28a58518514a56b70be28d97"
    },
    {
      header : "Solid - JAVA",
      subheader:"Back-end",
      urlDaimagem : "https://im2back.github.io/Portifolio/assets/certificados/Solid.png",
      urlDoCertificado: "https://cursos.alura.com.br/certificate/e7dbf68e-2eec-4cf8-a724-45b5fbdb4317?lang=pt_BR"
    },
    {
      header : "JPA e  JDBC",
      subheader:"Back-end",
      urlDaimagem : "https://im2back.github.io/Portifolio/assets/certificados/JpaeJDBC.png",
      urlDoCertificado: "https://cursos.alura.com.br/degree/certificate/9ad49a35-3d36-4ba0-8487-550bb9738283?lang=pt_BR"
    },
    {
      header : "HTTP",
      subheader:"Util",
      urlDaimagem : "https://im2back.github.io/Portifolio/assets/certificados/Http.png",
      urlDoCertificado: "https://cursos.alura.com.br/certificate/fed33b12-ad92-4b16-bee4-d4cc969d3841?lang=pt_BR"
    }
    ,
    {
      header : "Microservices and Messaging",
      subheader:"",
      urlDaimagem : "https://im2back.github.io/Portifolio/assets/certificados/Microservice.png",
      urlDoCertificado: "https://cursos.alura.com.br/degree/certificate/eb314b44-1d49-434a-83e1-eb82af80e35a?lang=pt_BR"
    }
    ,
    {
      header : "Springboot",
      subheader:"Back-end",
      urlDaimagem : "https://im2back.github.io/Portifolio/assets/certificados/Springboot.png",
      urlDoCertificado: "https://cursos.alura.com.br/degree/certificate/bbc082a4-2489-45c8-bb27-9e0a026af1c1?lang=pt_BR"
    }
    ,
    {
      header : "MVC",
      subheader:"Back-end",
      urlDaimagem : "https://im2back.github.io/Portifolio/assets/certificados/Mvc.png",
      urlDoCertificado: "https://cursos.alura.com.br/degree/certificate/83db4d0a-8938-4a44-ae50-afa620f7f31b?lang=pt_BR"
    }

    ,
    {
      header : "SQL e MYSQL",
      subheader:"Back-end",
      urlDaimagem : "https://im2back.github.io/Portifolio/assets/certificados/SQL.png",
      urlDoCertificado: "https://cursos.alura.com.br/certificate/ec0f2885-2810-470d-b064-e063fc230890?lang=pt_BR"
    }

    ,
    {
      header : "Spring Cloud",
      subheader:"Back-end",
      urlDaimagem : "https://im2back.github.io/Portifolio/assets/certificados/SpringCloud.png",
      urlDoCertificado: "https://www.udemy.com/certificate/UC-f565efe4-0bca-4a7d-a40e-03890211a5f1/"
    }
  ];

}

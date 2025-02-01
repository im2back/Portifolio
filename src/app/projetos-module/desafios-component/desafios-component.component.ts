import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Certificado } from '../../certificados/interfaces/Certificado';
import { ButtonModule } from 'primeng/button';
import { FormsModule } from '@angular/forms';
import { CardModule } from 'primeng/card';


@Component({
  selector: 'app-desafios-component',
  standalone: true,
  imports: [CommonModule,ButtonModule,FormsModule,CardModule],
  templateUrl: './desafios-component.component.html',
  styleUrl: './desafios-component.component.css'
})
export class DesafiosComponentComponent {


  lista: Certificado[]= [
    {
      header : "Desafio: PicPay",
      subheader:"Repositório 👇🏻",
      urlDaimagem : "https://im2back.github.io/Portifolio/assets/desafios/picpay.png",
      urlDoCertificado: "https://github.com/im2back/BankChallenger"

    },
    {
      header : "Desafio: UOL-HOST",
      subheader:"Repositório 👇🏻",
      urlDaimagem : "https://im2back.github.io/Portifolio/assets/desafios/uolhost2.png",
      urlDoCertificado: "https://github.com/im2back/Uol-Challenger"
    },
    {
      header : "Teste Técnico - Attus",
      subheader:"Repositório 👇🏻",
      urlDaimagem : "https://im2back.github.io/Portifolio/assets/desafios/attus2.png",
      urlDoCertificado: "https://github.com/im2back/Teste-Tecnico-attus"
    },

    {
      header : "API - Av. de Crédito",
      subheader:"Repositório 👇🏻",
      urlDaimagem : "https://im2back.github.io/Portifolio/assets/desafios/credit2.png",
      urlDoCertificado: "https://github.com/im2back/CreditAppraiser"
    },

    {
      header : "Caderneta Digital 2.0",
      subheader:"Repositório 👇🏻",
      urlDaimagem : "https://im2back.github.io/Portifolio/assets/desafios/mercearia.jpg",
      urlDoCertificado: "https://github.com/im2back/Caderneta-Digital-2.0"
    },

    {
      header : "API - G. de Consultas",
      subheader:"Repositório 👇🏻",
      urlDaimagem : "https://im2back.github.io/Portifolio/assets/desafios/vollmed2.png",
      urlDoCertificado: "https://github.com/im2back/Voll.med"
    },

    {
      header : "API - G. de pedidos",
      subheader:"Repositório 👇🏻",
      urlDaimagem : "https://im2back.github.io/Portifolio/assets/desafios/orderapi2.png",
      urlDoCertificado: "https://github.com/im2back/Order.API"
    },
    {
      header : "CI/CD",
      subheader:"Repositório 👇🏻",
      urlDaimagem : "https://im2back.github.io/Portifolio/assets/desafios/CICD.jpg",
      urlDoCertificado: "https://github.com/im2back/CI-CD-Jenkins-Docker-Sonnar"
    },

  ];

}

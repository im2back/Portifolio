import { CommonModule } from '@angular/common';
import { Component, Input, NgModule } from '@angular/core';

interface MyObject {
  src: string;
  name: string;
  description: string;
  color: boolean;
  color2: string;
}

@Component({
  selector: 'app-card-tecnology',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card-tecnology.component.html',
  styleUrl: './card-tecnology.component.css'
})
export class CardTecnologyComponent {
@Input() rabbit:boolean = true;

  toggleTab1() {
    this.isTabOpen1 = !this.isTabOpen1;
  }
  isTabOpen1: boolean = false;

  toggleTab2() {
    this.isTabOpen2 = !this.isTabOpen2;
  }
  isTabOpen2: boolean = false;

  toggleTab3() {
    this.isTabOpen3 = !this.isTabOpen3;
  }
  isTabOpen3: boolean = false;

toggleTab4() {
  this.isTabOpen4 = !this.isTabOpen4;
}
isTabOpen4: boolean = false;

toggleTab5() {
  this.isTabOpen5 = !this.isTabOpen5;
}
isTabOpen5: boolean = false;

toggleTab6() {
  this.isTabOpen6 = !this.isTabOpen6;
}
isTabOpen6: boolean = false;

toggleTab7() {
  this.isTabOpen7 = !this.isTabOpen7;
}
isTabOpen7: boolean = false;

toggleTab8() {
  this.isTabOpen8 = !this.isTabOpen8;
}
isTabOpen8: boolean = false;



    data1: MyObject = {
      src: 'https://im2back.github.io/Portifolio/assets/icons/spring-icon.svg',
      name: 'SpringBoot',
      description: 'Back end desenvolvido utilizando Java e Spring Boot é a combinação perfeita pois oferece robustez, escalabilidade e eficiência, facilitando a criação de aplicações seguras e de alto desempenho com menor esforço de configuração e uma vasta comunidade de suporte',
      color: false,
      color2: 'green'
    }

    data2: MyObject ={
      src: 'https://im2back.github.io/Portifolio/assets/icons/java-icon.svg',
      name: 'Java',
      description: 'Back end desenvolvido utilizando Java e Spring Boot é a combinação perfeita pois oferece robustez, escalabilidade e eficiência, facilitando a criação de aplicações seguras e de alto desempenho com menor esforço de configuração e uma vasta comunidade de suporte',
      color: false,
      color2: 'red'
    }

    data3: MyObject ={
      src: 'https://im2back.github.io/Portifolio/assets/icons/docker-icon.svg',
      name: 'Docker',
      description: 'Docker foi utilizado para orquestrar o deploy local da aplicação em containers, permitindo a criação de ambientes isolados que garantem consistência entre desenvolvimento, teste e produção. Além disso, facilita a geração e gerenciamento de imagens que podem ser facilmente compartilhadas e reutilizadas, otimizando o processo de desenvolvimento e implantação.',
      color: false,
      color2: '#6bd1ff'
    }

    data4: MyObject ={
      src: 'https://im2back.github.io/Portifolio/assets/icons/github-icon.svg',
      name: 'GitHub',
      description: 'Github foi utilizado como repositório remoto para versionar o código da aplicação.',
      color: false,
      color2: 'white'
    }

    data5: MyObject ={
      src: 'https://im2back.github.io/Portifolio/assets/icons/angular-icon.svg',
      name: 'Angular',
      description: 'Angular é um dos melhores frameworks para se utilizar com Spring Boot por isso foi escolhido e também porque proporciona uma estrutura coesa para desenvolver o frontend enquanto Spring Boot se encarrega do backend, facilitando assim a criação de aplicações completas com uma integração suave e eficiente entre cliente e servidor.',
      color: false,
      color2: '#dc6ebe'
    }

    data6: MyObject ={
      src: 'https://im2back.github.io/Portifolio/assets/icons/arquitetura-icon.svg',
      name: 'Microsserviços',
      description: 'Projeto implementado utilizando a arquitetura de microsserviços, porque temos maior facilidade de manutenção, escalabilidade independente de componentes, e agilidade na implementação de novas funcionalidades, além de possibilitar a integração contínua e entrega contínua (CI/CD) de forma mais eficaz.',
      color: false,
      color2: '#ffba05'
    }

    data7: MyObject ={
      src: 'https://im2back.github.io/Portifolio/assets/icons/rabbit.svg',
      name: 'RabbitMQ',
      description: 'RabbitMQ é um broker de mensagens de código aberto escolhido por sua confiabilidade, escalabilidade e suporte a múltiplos protocolos, facilitando a comunicação assíncrona entre microsserviços e garantindo o processamento eficiente de mensagens.',
      color: false,
      color2: '#FF7B31'
    }

    data8: MyObject = {
      src: 'https://im2back.github.io/Portifolio/assets/icons/mysql-icon.svg',
      name: 'MySql',
      description: 'MySQL é um banco de dados gratuito e de código aberto, por isso foi escolhido para o projeto, oferecendo uma solução robusta e confiável sem custos adicionais de licenciamento, além de ser amplamente suportado pela comunidade e compatível com diversas plataformas e tecnologias.',
      color: false,
      color2: '#7b71ff'
    }


}

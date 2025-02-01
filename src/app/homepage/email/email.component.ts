import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import emailjs from 'emailjs-com';

@Component({
  selector: 'app-email',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './email.component.html',
  styleUrl: './email.component.css'
})
export class EmailComponent {

  ngOnInit(): void {
    emailjs.init('ui694R63BdBLnrnLi'); // Substitua pelo seu User ID
  }

  isVisible = false;

  showThankYouMessage = false;

  toggleEmailContainer() {
    this.isVisible = !this.isVisible;
    this.showThankYouMessage = false; // Oculta a mensagem de agradecimento ao alternar o formulário
    console.log(this.isVisible);
  }

  sendEmail(event: Event) {
    event.preventDefault();

    emailjs.sendForm('service_9mr0ns3', 'template_5q15fdf', event.target as HTMLFormElement)
      .then((result: any) => {
        this.showThankYouMessage = true;
        const audio = document.getElementById('success-sound') as HTMLAudioElement;
        audio.play(); // Reproduz o som
        setTimeout(() => this.toggleEmailContainer(), 2000);
      }, (error: any) => {
        console.log('Erro:', error.text);
        alert('Erro ao enviar e-mail: ' + error.text);
      });
  }


}

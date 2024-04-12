import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-qualificacoes-component',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './qualificacoes-component.component.html',
  styleUrl: './qualificacoes-component.component.css'
})
export class QualificacoesComponentComponent {

  tooltips: Record<string, boolean> = {};

  toggleTooltip(index: string) {
    this.tooltips[index] = !this.tooltips[index];
  }

}

import { Component } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css'],
})
export class CalculadoraComponent {
  titulo = 'Aplicación de Calculadora';
  resultado: number = 0;
  valorA: number = 0;
  valorB: number = 0;

  sumar(): void {
    this.resultado = this.valorA + this.valorB;
  }
}

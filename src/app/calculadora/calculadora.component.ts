import { Component } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css'],
})
export class CalculadoraComponent {
  titulo = 'Aplicación de Calculadora';
  resultado: number = 0;
  respuesta(resultado: number) {
    this.resultado = resultado;
  }
}

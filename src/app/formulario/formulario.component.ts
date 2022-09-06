import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css'],
})
export class FormularioComponent {
  valorA: number = 0;
  valorB: number = 0;
  @Output() valorRespuesta = new EventEmitter<number>();
  sumar(): void {
    this.valorRespuesta.emit(this.valorA + this.valorB);
  }
}

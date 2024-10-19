import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title: string = 'proyecto "Sueldo Basico"';
  nombre: string = '';
  sueldoBasico: number | null = null;
  numeroHijos: number | null = null;
  bonificacion: number = 0;
  sueldoFinal: number = 0;

  calcularSueldo() {
    if (this.sueldoBasico !== null && this.numeroHijos !== null) {
      if (this.numeroHijos > 0) {
        // Si el trabajador tiene hijos, se calcula la bonificación
        this.bonificacion = this.sueldoBasico * 0.07;
      } else {
        // Si no tiene hijos, la bonificación es 0
        this.bonificacion = 0;
      }
      this.sueldoFinal = this.sueldoBasico + this.bonificacion;
    }
  }

  formatoSalida(monto: number | null) : string {
    if (monto === null) {
      return '0 soles'; // Valor por defecto para null
    }
    // Formatea el número con dos decimales y añade "nuevos soles"
    return `${monto.toFixed(2)} nuevos soles`;
  }
}

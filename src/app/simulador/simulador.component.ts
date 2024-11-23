import { Component } from '@angular/core';

@Component({
  selector: 'app-simulador',
  templateUrl: './simulador.component.html',
  styleUrls: ['./simulador.component.css']
})
export class SimuladorComponent {
  contrasenaObjetivo: string = ''; // Contraseña objetivo
  intentoActual: string = '';      // Intento actual
  intentos: number = 0;            // Contador de intentos
  velocidad: number = 50;          // Velocidad del ataque (ms por intento)
  ataqueEnProgreso: boolean = false; // Estado del ataque
  caracteresPosibles: string = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  intentosPorSegundo: string = '0'; // Intentos por segundo
  progreso: number = 0;            // Progreso del ataque (%)
  tiempoInicio: number = 0;        // Tiempo de inicio del ataque

  // Inicia el ataque
  iniciarAtaque() {
    if (!this.contrasenaObjetivo) {
      alert('Por favor, ingrese una contraseña objetivo.');
      return;
    }

    this.intentoActual = '';
    this.intentos = 0;
    this.ataqueEnProgreso = true;
    this.tiempoInicio = Date.now();

    this.simularIntentos();
  }

  // Detiene el ataque
  detenerAtaque() {
    this.ataqueEnProgreso = false;
  }

  // Simula los intentos de fuerza bruta
  simularIntentos() {
    if (!this.ataqueEnProgreso) return;

    this.intentoActual = this.generarIntento();
    this.intentos++;

    const tiempoSegundos = (Date.now() - this.tiempoInicio) / 1000;
    this.intentosPorSegundo = (this.intentos / tiempoSegundos).toFixed(2);
    this.progreso = Math.min((this.intentos / (this.caracteresPosibles.length ** this.contrasenaObjetivo.length)) * 100, 100);

    if (this.intentoActual === this.contrasenaObjetivo) {
      this.ataqueEnProgreso = false;
      alert(`¡Contraseña encontrada en ${this.intentos} intentos y ${tiempoSegundos.toFixed(2)} segundos!`);
    } else {
      setTimeout(() => this.simularIntentos(), this.velocidad);
    }
  }

  // Genera un intento aleatorio
  generarIntento(): string {
    let intento = '';
    for (let i = 0; i < this.contrasenaObjetivo.length; i++) {
      const indiceAleatorio = Math.floor(Math.random() * this.caracteresPosibles.length);
      intento += this.caracteresPosibles.charAt(indiceAleatorio);
    }
    return intento;
  }
}

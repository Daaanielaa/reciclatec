import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-informacion',
  standalone: true,
  imports: [CommonModule],
  templateUrl: 'informacion.component.html',
  styleUrls: ['./informacion.component.css']
})
export class InformacionComponent {
  residuos = [
    {
      nombre: 'Teléfono',
      imagen: 'assets/img/telefono.png',
      descripcion: 'Dispositivo móvil que contiene múltiples materiales reciclables.',
      caracteristicas: [
        'Plástico: 40%',
        'Vidrio y Cerámica: 20%',
        'Cobre: 10%',
        'Níquel: 2% - 10%',
      ]
    },
    {
      nombre: 'Televisor',
      imagen: 'assets/img/televisor.png',
      descripcion: 'Dispositivo para visualización que también contiene metales y plásticos.',
      caracteristicas: [
        'Hierro: 30%',
        'Aluminio: 15%',
        'Cobre: 10%',
        'Plástico: 28%',
      ]
    }
  ];

  residuosSeleccionada = this.residuos[0];

  seleccionarResiduo(residuo: any) {
    this.residuosSeleccionada = residuo;
  }
}

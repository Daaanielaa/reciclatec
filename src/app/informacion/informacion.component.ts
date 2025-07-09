import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-informacion',
  standalone: true,             // Cambia a true para standalone
  imports: [CommonModule],      // Importa CommonModule para directivas comunes
  templateUrl: './informacion.component.html',
  styleUrls: ['./informacion.component.css']  // corregí styleUrl a styleUrls
})
export class InformacionComponent { }

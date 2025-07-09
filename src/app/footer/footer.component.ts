import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';  // Importar para directivas básicas

@Component({
  selector: 'app-footer',
  standalone: true,             // Cambia a true para que sea standalone
  imports: [CommonModule],      // Importa CommonModule para *ngIf, *ngFor, etc.
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']  // corregí de 'styleUrl' a 'styleUrls'
})
export class FooterComponent { }

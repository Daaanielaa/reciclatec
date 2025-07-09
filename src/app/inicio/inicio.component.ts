import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio',
  standalone: false,
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {
  tarjetas = [
    {
      titulo: 'Residuos Orgánicos',
      imagen: 'assets/img/organicos.png',
      descripcion: 'Material biodegradable que se descompone fácilmente.',
      flipped: false
    },
    {
      titulo: 'Residuos Inorgánicos',
      imagen: 'assets/img/inorganicos.png',
      descripcion: 'Material no biodegradable como plásticos y metales.',
      flipped: false
    },
    {
      titulo: 'RAEE',
      imagen: 'assets/img/raee.png',
      descripcion: 'Residuos de Aparatos Eléctricos y Electrónicos como computadoras, celulares y más.',
      flipped: false
    }
  ];

  currentSlide = 0;

  ngOnInit(): void {
    this.showSlides();
  }

  toggleFlip(tarjeta: any) {
    tarjeta.flipped = !tarjeta.flipped;
  }

  showSlides(): void {
    const slides: any = document.getElementsByClassName("carousel-slide");
    for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }

    this.currentSlide++;
    if (this.currentSlide > slides.length) {
      this.currentSlide = 1;
    }

    if (slides[this.currentSlide - 1]) {
      slides[this.currentSlide - 1].style.display = "block";
    }

    setTimeout(() => this.showSlides(), 4000); // Cambia cada 4 segundos
  }
}

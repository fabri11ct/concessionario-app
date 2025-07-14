// src/app/pages/car-list/car-list.component.ts
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Car, CarService } from '../../services/car.service';

@Component({
  selector: 'app-car-list',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './car-list.component.html',
  styleUrl: './car-list.component.scss' // Nota: abbiamo cambiato in styleUrl
})
export class CarListComponent implements OnInit {
  cars: Car[] = [];
  // Variabile per tenere traccia della slide corrente nel carosello
  currentSlide = 0;

  constructor(private carService: CarService) { }

  ngOnInit(): void {
    this.cars = this.carService.getCars();
  }

  // Funzione per andare alla slide precedente
  prevSlide(): void {
    // Se siamo sulla prima slide, andiamo all'ultima, altrimenti vai indietro di 1
    this.currentSlide = this.currentSlide === 0 ? this.cars.length - 1 : this.currentSlide - 1;
  }

  // Funzione per andare alla slide successiva
  nextSlide(): void {
    // Se siamo all'ultima slide, torniamo alla prima, altrimenti vai avanti di 1
    this.currentSlide = this.currentSlide === this.cars.length - 1 ? 0 : this.currentSlide + 1;
  }
}
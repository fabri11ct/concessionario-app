import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { Car, CarService } from '../../services/car.service';

@Component({
  selector: 'app-car-details',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './car-details.component.html',
  styleUrl: './car-details.component.scss'
})
export class CarDetailsComponent implements OnInit {
  // Può contenere un'auto o essere 'undefined' se non trovata
  car: Car | undefined;

  // Iniezione di ActivatedRoute per leggere i parametri dell'URL (l'ID)
  constructor(
    private route: ActivatedRoute,
    private carService: CarService
  ) { }

  ngOnInit(): void {
    const carIdParam = this.route.snapshot.paramMap.get('id');
    if (carIdParam) {
      //Il + converte da stringa a numero
      const carId = +carIdParam;
      this.car = this.carService.getCarById(carId);
    }
  }
}
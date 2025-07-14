import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Car, CarService } from '../../services/car.service';

@Component({
  selector: 'app-car-list',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './car-list.component.html',
  styleUrl: './car-list.component.scss'
})
export class CarListComponent implements OnInit {
  // Array con le auto da visualizzare
  cars: Car[] = [];

  // "Iniezione" del CarService per poter usare i suoi metodi
  constructor(private carService: CarService) { }


  ngOnInit(): void {
    this.cars = this.carService.getCars();
  }
}
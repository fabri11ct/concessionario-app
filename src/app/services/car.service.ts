import { Injectable } from '@angular/core';

// oggetto auto (possibilmente un carro funebre)
export interface Car {
  id: number;
  marca: string;
  modello: string;
  anno: number;
  prezzo: number;
  immagineUrl: string;
  descrizione: string;
}

@Injectable({
  providedIn: 'root'
})
export class CarService {

  // oggetti auto con qualcosa dentro
  private cars: Car[] = [
    {
      id: 1,
      marca: 'Volkswagen',
      modello: 'Phaeton',
      anno: 2006,
      prezzo: 11000,
      immagineUrl: 'assets\images\VWphaeton.jpg',
      descrizione: 'La berlina piu lussuosa mai prodotta da parte del gruppo VW, basata sul telaio della Audi A8 ma con il motore della Bentley continental GT'
    },
    {
      id: 2,
      marca: 'Chrysler',
      modello: 'Pt-Cruiser',
      anno: 2005,
      prezzo: 2000,
      immagineUrl: 'assets\images\pt-cruiser.jpeg',
      descrizione: 'questa macchina e una delle cose piu brutte che siano mai state partorite dalla mente di un uomo dopo questo sito'
    },
    {
      id: 3,
      marca: 'Alfa Romeo',
      modello: 'Stelvio',
      anno: 2020,
      prezzo: 22500,
      immagineUrl: 'assets\images\stelvio.jpg',
      descrizione: 'Bella, comoda, spaziosa, finche non te la rubano o non si fonde il motore perche hai fatto il tagliano 100km dopo'
    },
    {
      id: 4,
      marca: 'Land Rover',
      modello: 'Range Rover Autobiography',
      anno: 2013,
      prezzo: 32500,
      immagineUrl: 'assets\images\range.jpg',
      descrizione: 'Bella, bellissima, fantastica, si nota che amo questa macchina inutilmente grande e ridicolmente poco affidabile? 10/10'
    }

  ];

  constructor() { }

  /* Ritorna l'elenco completo delle auto. */
  getCars(): Car[] {
    return this.cars;
  }

  /*
   Cerca e ritorna un auto tramite il suo ID.
   Ritorna 'undefined' se l'auto non viene trovata.
   */
  getCarById(id: number): Car | undefined {
    return this.cars.find(car => car.id === id);
  }
}
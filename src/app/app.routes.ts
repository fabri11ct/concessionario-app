import { Routes } from '@angular/router';
import { CarListComponent } from './pages/car-list/car-list.component';
import { CarDetailsComponent } from './pages/car-details/car-details.component';

// rotte applicazione
export const routes: Routes = [
    { path: '', redirectTo: '/auto', pathMatch: 'full' },
    { path: 'auto', component: CarListComponent },
    { path: 'auto/:id', component: CarDetailsComponent }
];
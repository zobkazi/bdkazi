import { Routes } from '@angular/router';
import { RegisterComponent } from './features/auth/register/register.component';  // Import the RegisterComponent

export const routes: Routes = [
  { path: 'register', component: RegisterComponent },  // Define the route for the Register component
  // You can add other routes here for your app
  { path: '', redirectTo: '/register', pathMatch: 'full' },  // Redirect to 'register' by default
];

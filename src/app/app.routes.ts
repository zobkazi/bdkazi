import { Routes } from '@angular/router';
import { RegisterComponent } from './features/auth/register/register.component';  // Import the RegisterComponent
import {LoginComponent} from './features/auth/login/login.component'


export const routes: Routes = [
  { path: 'register', component: RegisterComponent },
  {path: 'login', component: LoginComponent},

  { path: '', redirectTo: '/register', pathMatch: 'full' },  // Redirect to 'register' by default
];

import { Routes } from '@angular/router';
import { RegisterComponent } from './features/auth/register/register.component';  // Import the RegisterComponent
import {LoginComponent} from './features/auth/login/login.component';
import {BlogsComponent} from './features/blogs/blog/blogs.component'
import { BlogDetailsComponent } from './features/blogs/blog/blog-details.component';


export const routes: Routes = [
  { path: 'register', component: RegisterComponent },
  {path: 'login', component: LoginComponent},
  {path: 'blog', component: BlogsComponent},
  { path: 'blog/:id', component: BlogDetailsComponent },

  { path: '', redirectTo: '/register', pathMatch: 'full' },  // Redirect to 'register' by default
];

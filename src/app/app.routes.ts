import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { AnimatedSketchComponent } from './pages/animated-sketch/animated-sketch.component';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'animated-sketch', component: AnimatedSketchComponent },
  { path: '**', redirectTo: 'home' },
];

import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent) },
  { path: 'about', loadComponent: () => import('./pages/about/about.component').then(m => m.AboutComponent) },
  { path: 'animated-sketch', loadComponent: () => import('./pages/animated-sketch/animated-sketch.component').then(m => m.AnimatedSketchComponent) },
  { path: '**', redirectTo: 'home' },
];

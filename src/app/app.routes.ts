import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { CanvasSketchComponent } from './pages/canvas-sketch/canvas-sketch.component';
import { AnimatedSketchComponent } from './pages/animated-sketch/animated-sketch.component';
import { TweakpaneSketchComponent } from './pages/tweakpane-sketch/tweakpane-sketch.component';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'canvas', component: CanvasSketchComponent },
  { path: 'animated-sketch', component: AnimatedSketchComponent },
  { path: 'tweakpane-sketch', component: TweakpaneSketchComponent },
  { path: '**', redirectTo: 'home' },
];

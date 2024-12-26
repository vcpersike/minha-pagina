import { Component, OnInit, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HomeViewModel } from './home.viewmodel';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { HeaderComponent } from '@shared/header/header.component';
import { FooterComponent } from '@shared/footer/footer.component';

@Component({
  selector: 'app-home',
  imports: [CommonModule, HeaderComponent, FooterComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  title: string = '';
  description: string = '';
  projects: { name: string; description: string }[] = [];

  constructor(private homeViewModel: HomeViewModel, private router: Router) {
  }

  ngOnInit(): void {
    this.title = this.homeViewModel.title;
    this.description = this.homeViewModel.description;
    this.projects = this.homeViewModel.getProjects();
  }

  updateTitle(): void {
    this.homeViewModel.updateTitle('Título Atualizado!');
    this.title = this.homeViewModel.title;
  }

  goToAbout(): void {
    this.router.navigate(['/about'],{ replaceUrl: true });
  }

  goToAnimatedSketch(): void {
    this.router.navigate(['/animated-sketch'],{ replaceUrl: true });
  }
}

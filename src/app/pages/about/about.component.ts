import { CommonModule } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Router } from '@angular/router';
import { FooterComponent } from '@shared/footer/footer.component';
import { HeaderComponent } from '@shared/header/header.component';


@Component({
  selector: 'app-about',
  imports: [CommonModule, HeaderComponent, FooterComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent  {
  title: string = 'Sobre Mim';
  description: string = 'Esta página apresenta informações sobre mim e meu trabalho.';

  constructor(private router: Router) {}

  goToHome(): void {
    this.router.navigate(['/home'], { replaceUrl: true });
  }
}

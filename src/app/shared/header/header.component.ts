import { CommonModule } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA, Input, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { addIcons } from 'ionicons';
import { logoIonic } from 'ionicons/icons';

@Component({
  selector: 'app-header',
  imports: [CommonModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],

})
export class HeaderComponent  implements OnInit {
  @Input() title: string = 'Default Title';
  constructor(private location: Location, private router: Router) {
  addIcons({ logoIonic });
  }

  ngOnInit(): void {}

  goBack(): void {
    const navigationId = this.router.getCurrentNavigation()?.id;

    if (navigationId && navigationId > 1) {
      this.location.back();
    } else {
      this.router.navigate(['/'], { replaceUrl: true });
    }
  }

}

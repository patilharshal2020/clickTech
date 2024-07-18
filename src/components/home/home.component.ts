import { Component } from '@angular/core';
import { NavBarComponent } from '../nav-bar/nav-bar.component';
import { CommonModule } from '@angular/common';
import { CorouselComponent } from '../corousel/corousel.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NavBarComponent, CommonModule, CorouselComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}

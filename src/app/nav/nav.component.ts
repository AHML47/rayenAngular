import { Component } from '@angular/core';
import { AboutComponent } from '../about/about.component';
import { HomeComponent } from "../home/home.component";
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [AboutComponent,HomeComponent,RouterLink],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent {

}

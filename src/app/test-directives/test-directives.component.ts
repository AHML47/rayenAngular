import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-test-directives',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './test-directives.component.html',
  styleUrl: './test-directives.component.css'
})
export class TestDirectivesComponent {
afficherNom = false;
}

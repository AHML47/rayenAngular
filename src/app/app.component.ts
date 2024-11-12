import { Component, Directive } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from "./home/home.component";
import { HeaderComponent } from "./header/header.component";
import {FormsModule} from '@angular/forms'
import { TestDirectivesComponent } from './test-directives/test-directives.component';
import { AboutComponent } from './about/about.component';
import { Tp2Component } from './tp2/tp2.component';
import { FooterComponent } from "./footer/footer.component";
import { NavComponent } from "./nav/nav.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HomeComponent, HeaderComponent, FormsModule, TestDirectivesComponent, AboutComponent, Tp2Component, FooterComponent, NavComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'self presentation';
  hakiJomla: string = "";
  name = 'ahmed meliane';
  skills:any[]=["html","css"];
  paragraf = "j'attend depuis cette matiére de connait mieux le devloppement front-end";
  imageURL="assets/image.jpg"
  
  ekteb(): void {
    alert("barcha ktiba");
    
  }  
    
  
}



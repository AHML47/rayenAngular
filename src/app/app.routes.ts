import { Routes } from '@angular/router';
import { HomeComponent } from "./home/home.component";
import { ContactComponent } from "./contact/contact.component";
import { AboutComponent } from "./about/about.component";
import {EmploysComponent} from "./employs/employs.component";

export const routes: Routes = [
    {path:'home'    , component: HomeComponent },
    {path:'contact' , component: ContactComponent },
    {path:'about'   , component: AboutComponent },
    {path:'employes', component: EmploysComponent}
];

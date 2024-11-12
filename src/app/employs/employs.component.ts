import { Component, OnInit } from '@angular/core';
import { EmploysService } from '../employs.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-employs',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './employs.component.html',
  styleUrl: './employs.component.css'
})
export class EmploysComponent implements OnInit {
  public employs : any;
  constructor (private employesService:EmploysService){}

  ngOnInit(): void {
    this.employs=this.employesService.getEmploys();
  }
}

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-tp2',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './tp2.component.html',
  styleUrl: './tp2.component.css'
})
export class Tp2Component {

  name="";
  id=1;

message1 ="";
message2 ="";
//is_enable=false;
place="";

  etudiants : any[] =[];
//i: any;

  ajout(){
    const etudiant = {id :this.id,name :this.name,change :false};
    this.etudiants.push(etudiant);
    this.id++;
    this.message1 ="";
    this.message2 ="";
    this.name="";

  }

  modify(i:any){
      console.log("d5al");
      const name = prompt("deonner nouvelle nom :", i.name);
      if (name !== null && name.trim().length > 0) {
        
        i.name = name.trim();
      }
      this.message1 ="";
    this.message2 ="";
   
  }
  print(){
    this.etudiants.forEach(function (value) {
      console.log(value);
    }); 
  }
  delet(i:any){
    this.print();
    console.log("d5al");
    this.etudiants.splice(i.id-1,1);
    this.print();
    this.message1 ="";
    this.message2 ="";
  }
  details(i:any){
    this.message1="le nom est "+i.name;
    this.message2="le id est :"+i.id;
  }


}

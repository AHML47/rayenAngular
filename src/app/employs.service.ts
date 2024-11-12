import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmploysService {
  getEmploys(){
    return [
      {id :1 ,nom:'alya' , age: 30},
      {id :2,nom:'mnayka' , age: 5},
      {id :3 ,nom:'barcha' , age: 5}
    ];
  }
  constructor() { }
}

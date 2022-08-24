import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.scss']
})
export class CarsComponent implements OnInit {

  constructor() {
  }

 ngOnInit(): void {
 }

  addCarStatus =''
  inputText = ''

  addCar (){
    this.addCarStatus = 'Car was added!'
  }

  onKeyUp (event: Event) {
    this.inputText = (<HTMLInputElement>event.target).value;
  }




}

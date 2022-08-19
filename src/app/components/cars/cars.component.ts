import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.scss']
})
export class CarsComponent implements OnInit {

  canAddCar = false

  constructor() {
    setTimeout(()=> {
      this.canAddCar = true
    }, 3000)

   }

  ngOnInit(): void {
  }

}

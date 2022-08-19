import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.scss']
})
export class CarComponent implements OnInit {

  carName = 'Toyota'
  carDecription = 'Fantastic car for people. Lorem ipsum dolor sit amet'

  getName () {
    return this.carName
  }

  constructor() { }

  ngOnInit(): void {
  }

}

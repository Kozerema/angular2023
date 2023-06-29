import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

import {ICar} from "../../interfaces";

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {
  @Input()
  car: ICar

  @Output()
  carForUpdated = new EventEmitter<ICar>();
  carForDelete=new EventEmitter<ICar>();

  constructor() {
  }

  ngOnInit(): void {
  }

  setCarForUpdate(): void {
    this.carForUpdated.emit(this.car)
  }

  setCarForDelete() {
    this.carForDelete.emit(this.car)
  }
}

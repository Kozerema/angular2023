import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

import {CarService} from "../../services";
import {ICar} from "../../interfaces";

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent implements OnInit {
  cars: ICar[];
  form: FormGroup;
  carForUpdate: ICar | null;
  carForDelete: ICar | null;

  constructor(private carService: CarService) {
  }

  ngOnInit(): void {
    this._getAllCars()
    this._initForm()
  }

  _getAllCars(): void {
    this.carService.getAll().subscribe(value => this.cars = value)
  }

  _initForm(): void {
    this.form = new FormGroup(
      {
        brand: new FormControl(null, [Validators.pattern(/^[a-zA-Zа-яА-яёЁіІїЇ]{1,20}$/)]),
        price: new FormControl(null, [Validators.min(0), Validators.max(1000000)]),
        year: new FormControl(null, [Validators.min(1990), Validators.max(new Date().getFullYear())])
      }
    )
  }

  save(): void {
    if (!this.carForUpdate) {
      this.carService.create(this.form.getRawValue()).subscribe(() => {
        this._getAllCars()
      })
    } else {
      this.carService.updateById(this.carForUpdate.id, this.form.getRawValue()).subscribe(() => {
        this._getAllCars()
        this.carForUpdate = null;
      })
    }
    this.form.reset()
  }


  getCarForUpdate(car: ICar) {
    this.carForUpdate = car
    this.form.setValue({
      brand: car.brand,
      price: car.price,
      year: car.year
    })
  }

  // getCarForDelete(car: ICar) {
  //   this.carForDelete = car
  //
  //   this.carService.deleteById(this.carForDelete.id).subscribe(() => {
  //     this._getAllCars();
  //   })
  // }

}

import {Component, Input, OnInit} from '@angular/core';
import {ICar} from "../../../../interfaces";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {
  @Input()
  car: ICar;

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
  }

  edit(): void {
    this.router.navigate([this.car.id], {relativeTo: this.activatedRoute, state:this.car})
  }
}

import { Component, OnInit } from '@angular/core';
import { CarService } from '../shared/car/car.service';
@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.css']
})
export class CarListComponent implements OnInit {
  cars: Array<any>;
  constructor(private carService: CarService) { }

  ngOnInit() {
    this.carService.getAll().subscribe(data => {
      this.cars = data;
      console.log("data" + JSON.stringify(data));
    });
  }
  remove(href) {
    console.log("DELETE" + JSON.stringify(href));
    this.carService.remove(href).subscribe(result => {

    }, error => console.error(error));
  }
}

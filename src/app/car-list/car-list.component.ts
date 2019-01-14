import { Component, OnInit } from '@angular/core';
import { CarService } from '../shared/car/car.service';
@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.css']
})
export class CarListComponent implements OnInit {
  cars: Array<any>;
  id;
  constructor(private carService: CarService) { }

  ngOnInit() {
    this.carService.getAll().subscribe(data => {
      this.cars = data;
      console.log("data" + JSON.stringify(data));
    });
  }
  // remove(href) {
  //   this.id = href;
  //   console.log("DELETE" + this.id);
  //   this.carService.remove(this.id).subscribe((data) => {
  //     console.log("success");
  //   });
  // }
}

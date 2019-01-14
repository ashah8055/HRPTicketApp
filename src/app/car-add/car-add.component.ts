import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { CarService } from '../shared/car/car.service';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-car-add',
  templateUrl: './car-add.component.html',
  styleUrls: ['./car-add.component.css']
})
export class CarAddComponent implements OnInit, OnDestroy {
  car: any = {};
  one;
  sub: Subscription;

  myOptions = [
    { id: 1, name: "Internet" },
    { id: 2, name: "Laptop" },
    { id: 3, name: "Pizza" },
  ];
  constructor(private route: ActivatedRoute,
    private router: Router,
    private carService: CarService) { }

  ngOnInit() {
  }
  ngOnDestroy() {

    this.one.unsubscribe();
  }

  gotoList() {
    this.router.navigate(['/car-list']);
  }
  save(form: NgForm) {
    this.one = this.carService.save(form).subscribe(result => {
      this.gotoList();
    }, error => console.error(error));
  }

}

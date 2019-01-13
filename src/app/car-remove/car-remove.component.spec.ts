import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarRemoveComponent } from './car-remove.component';

describe('CarRemoveComponent', () => {
  let component: CarRemoveComponent;
  let fixture: ComponentFixture<CarRemoveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarRemoveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarRemoveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

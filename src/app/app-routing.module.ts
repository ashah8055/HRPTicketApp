import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CarAddComponent } from './car-add/car-add.component';
import { CarListComponent } from './car-list/car-list.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {
    path: 'home',
    component: LoginComponent
  },
  {
    path: 'car-add',
    component: CarAddComponent
  },
  {
    path: 'car-list',
    component: CarListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

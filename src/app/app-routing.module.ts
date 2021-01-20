import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AddRestoComponent} from './add-resto/add-resto.component';
import {UpdateRestoComponent} from './update-resto/update-resto.component';
import {LoginRestoComponent} from './login-resto/login-resto.component';
import {RegisterRestoComponent} from './register-resto/register-resto.component';
import {ListRestoComponent} from './list-resto/list-resto.component';
import { from } from 'rxjs';
import { compileComponentFromMetadata } from '@angular/compiler';

const routes: Routes = [
  // {
  //   path:"home",
  //   Component: ListRestoComponent
  // },
  {
    path:"add",
    component: AddRestoComponent
  },
  {
    path:"update/:id",
    component:UpdateRestoComponent
  },
  {
    path:"register",
    component:RegisterRestoComponent
  },
  {
    path:"list",
    component:ListRestoComponent
  },
  {
    path:"",
    component:LoginRestoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddRestoComponent } from './add-resto/add-resto.component';
import { UpdateRestoComponent } from './update-resto/update-resto.component';
import { LoginRestoComponent } from './login-resto/login-resto.component';
import { RegisterRestoComponent } from './register-resto/register-resto.component';
import { ListRestoComponent } from './list-resto/list-resto.component';

import {HttpClientModule} from '@angular/common/http';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    AddRestoComponent,
    UpdateRestoComponent,
    LoginRestoComponent,
    RegisterRestoComponent,
    ListRestoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

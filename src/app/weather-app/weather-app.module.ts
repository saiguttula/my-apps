import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WeatherAppComponent } from './weather-app.component';
import { WeatherAppRoutingModule } from './weather-app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [WeatherAppComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    MatInputModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    WeatherAppRoutingModule
  ]
})
export class WeatherAppModule { }

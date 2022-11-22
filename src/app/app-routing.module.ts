import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path:'',
    component: HomeComponent
  },
  {
    path:'calculator',
    loadChildren: () => import('./calculator/calculator.module').then(m => m.CalculatorModule)
  },
  {
    path:'typing',
    loadChildren: () => import('./typing/typing.module').then(m => m.TypingModule)
  },
  {
    path:'population',
    loadChildren: () => import('./population/population.module').then(m => m.PopulationModule)
  },
  {
    path:'weather',
    loadChildren: () => import('./weather-app/weather-app.module').then(m => m.WeatherAppModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

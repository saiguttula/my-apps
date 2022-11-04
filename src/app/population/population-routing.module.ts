import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PopulationComponent } from './population.component';

const routes: Routes= [
  {
    path: '', component: PopulationComponent
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports:[RouterModule]
})
export class PopulationRoutingModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PopulationRoutingModule } from './population-routing.module';
import { PopulationComponent } from './population.component';
import { NgxEchartsModule } from 'ngx-echarts';



@NgModule({
  declarations: [PopulationComponent],
  imports: [
    CommonModule,
    PopulationRoutingModule,
    NgxEchartsModule.forRoot({
      echarts: () => import('echarts'),
    })
  ]
})
export class PopulationModule { }

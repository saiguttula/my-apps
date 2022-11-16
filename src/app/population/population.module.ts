import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PopulationRoutingModule } from './population-routing.module';
import { PopulationComponent } from './population.component';
import { NgxEchartsModule } from 'ngx-echarts';
import { FormsModule } from '@angular/forms';
import { TableModule } from 'primeng/table';



@NgModule({
  declarations: [PopulationComponent],
  imports: [
    CommonModule,
    PopulationRoutingModule,
    FormsModule,
    TableModule,
    NgxEchartsModule.forRoot({
      echarts: () => import('echarts'),
    })
  ]
})
export class PopulationModule { }

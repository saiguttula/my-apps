import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { CalculatorComponent } from "./calculator.component";
import { CalculatorRoutingModule } from "./calculator.routing.module";


@NgModule({
  declarations: [
    CalculatorComponent
  ],
  imports: [
    CommonModule,
    CalculatorRoutingModule
  ]
})

export class CalculatorModule {}

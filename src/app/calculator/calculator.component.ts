import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss']
})
export class CalculatorComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  value:any= '';

  onClick(clickedValue: any){
    if(clickedValue === '='){
      if(this.value.indexOf('%')!== -1){
        const index = this.value.indexOf('%');
        const prevValue = this.value.slice(0,index);
        const nextValue = this.value.slice(index+1);
        const sol = (eval(prevValue)*eval(nextValue))/100
        this.value = sol.toString();
      }
      this.value = eval(this.value).toString();
    }
    else if(clickedValue === 'AC'){
      this.value = '';
    }
    else if(clickedValue==='+/-'){
      if(this.value.slice(0,1)=='-'){
        this.value = this.value.slice(1);
      }else{
        this.value = '-' + this.value;
      }
    }
    else{
      this.value += clickedValue;
    }
  }

}

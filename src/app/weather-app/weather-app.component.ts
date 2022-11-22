import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-weather-app',
  templateUrl: './weather-app.component.html',
  styleUrls: ['./weather-app.component.scss']
})
export class WeatherAppComponent implements OnInit {

  constructor(
    private http:HttpClient,
  ) {
    
    window.navigator.geolocation.getCurrentPosition((position)=> this.getConditionByLocation(position.coords.latitude,position.coords.longitude))
   }

    // minute = 1000 * 60;
    // hour = this.minute * 60;
    // day = this.hour * 24;
    // year = this.day * 365;

  ngOnInit(): void {
    
  }

  name:string = '';

  data:any;
  temp:number=0;
  city:string='';
  condition:string='';
  time:string='';
  date:string='';

  private _token:string = '6d195e91217252739e5302e921d572a4';
  bgUrl:string = 'url('+'https://images.pexels.com/photos/325185/pexels-photo-325185.jpeg';
  citiesList:string[]= ['London', 'Delhi', 'Hyderabad' , 'New York' ]
  days: string[] = ['Sun' ,'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  months: string[] = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  icon:string='';
  feelsLike:number=0;
  humidity:number=0;
  description:string = '';
  windSpeed:any;

  updateValues(){
    this.temp = Math.floor(this.data.main.temp - 273);
    this.city = this.data.name;
    this.condition = this.data.weather[0].main;
    this.time =`${new Date().getHours()}:${new Date().getMinutes()}`;
    this.date = ` ${this.days[new Date().getDay()]} ,${new Date().getDate()} ${this.months[new Date().getMonth()]} ${new Date().getFullYear()}`;
    this.icon = `http://openweathermap.org/img/wn/${this.data?.weather[0].icon}.png`;
    this.feelsLike = this.data?.main.feels_like;
    this.humidity = this.data?.main.humidity;
    this.description = this.data?.weather[0].description;
    this.windSpeed = this.data?.wind.speed;
  }

  getConditionByLocation(latitude:any,longitude:any){
    this.http.get(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${this._token}`).subscribe((res)=>{
      // console.log(res);
      this.data = res;
      this.updateValues();
    })
  }

  getConditionByName(){
    this.data = null;
    // console.log(this.name);
    this.http.get(`https://api.openweathermap.org/data/2.5/weather?q=${this.name}&appid=${this._token}`).subscribe((res) => {
      // console.log(res);
      this.data = res;
      this.updateValues();
    })
  }

  onSelectLocation(city: string){
    this.name = city;
    this.getConditionByName();
  }
}

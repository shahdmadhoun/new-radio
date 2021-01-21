import { Component, OnInit  } from '@angular/core';
import { environment } from '../environments/environment';
import { Observable } from 'rxjs';
import { CountriesService } from './services/countries.service';
import { readSync } from 'fs';



export interface city {
  name: string;
  code: string;
  area: number;
  population: number;
} 
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  cityData:any;
  selected:any;
  time = 0;
  constructor(private data: CountriesService) {
    
  }
  ngOnInit(): void {
    this.data.getCity().subscribe(d => {
      this.cityData = d;
      console.log(this.cityData);
    });
  }
  select(value: any) {
    this.selected = value;
    console.log(this.selected);
  }
  

  changeIcon() {
    if (this.time == 0) {
      this.time +=1;
      return this.time;
    } else {
      this.time -=1;
      return this.time;
    }
   }

   
}
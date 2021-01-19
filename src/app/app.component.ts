import { Component, OnInit  } from '@angular/core';
import { environment } from '../environments/environment';
import { Observable } from 'rxjs';
import { CountriesService } from './services/countries.service';



export interface city {
  name: string;
  code: string;
  area: number;
  population: number;
} 
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  cityData:any;
  selected:any;
  constructor(private data: CountriesService) {
    console.log(environment.url);
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
  
}
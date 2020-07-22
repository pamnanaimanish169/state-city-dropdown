import { Component, OnInit } from '@angular/core';
import { GetDataService } from './get-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'state-city-dropdown';
  country;
  state;
  city;
  countryArray;

  constructor(private dataService: GetDataService) {}

  ngOnInit() {
    this.dataService.login().subscribe(res => {
      console.log('auth-token' , res.auth_token);
      this.dataService.getCountries(res.auth_token).subscribe(res => {
        console.log(res);
        this.countryArray = res;
      });
    });
  }

  getState() {

  }

}

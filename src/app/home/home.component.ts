import { Component, inject } from '@angular/core';
import { HousingLocationComponent } from '../housing-location/housing-location.component';
import { CommonModule } from '@angular/common';
import { HousingLocation } from '../housing-location';
import { HousingService } from '../housing.service';

@Component({
  selector: 'app-home',
  imports: [CommonModule, HousingLocationComponent],
  template: `
    <section>
    <form>
      <input type="text" placeholder="Filter by City" name="" id="">
      <button class="primary" type="button">Search</button>
    <form>
<section class="results">
<app-housing-location *ngFor="let housingLocation of housingLocationList" [housingLocation]="housingLocation"></app-housing-location>
</section>
  `,
  styleUrls:['./home.component.css'],
  styles: ``,
})
export class HomeComponent {
  housingLocationList: HousingLocation[] =[];
  housingService: HousingService = inject(HousingService);

  constructor(){
    this.housingLocationList = this.housingService.getAllHousingLocations();
  }
}

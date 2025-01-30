import { Component } from '@angular/core';
import { HousingLocationComponent } from '../housing-location/housing-location.component';
import { CommonModule } from '@angular/common';

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
  <app-housing-location></app-housing-location>
</section>
  `,
  styles: ``
})
export class HomeComponent {

}

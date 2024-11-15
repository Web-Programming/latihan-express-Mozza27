import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-housinglocation',
  standalone: true,
  imports: [RouterModule, CommonModule],
  template: `
    <section 
      class="listing">
      <img class="listing-photo" [src]="housingLocation.photo" alt="Exterior photo of {{housingLocation.}}
      <h2 class="listing-heading">{{ housingLocation.name }}</h2>
      <p class="listing-location">{{ housingLocation.city}}, {{housingLocation.state }}</p>
      <p style-"padding"
      <a> [routerLink]-"['/details', housingLocation.id]">Learn More</a>
    </section>
  `,
  styleUrl: './housinglocation.component.css'
})
export class HousinglocationComponent {

}

import { Component } from '@angular/core';
import { ListingsService } from './listings.service';

import { Pet } from './pet';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  [x: string]: any;
  title = 'team-bug-busters-frontend';


// SubmitPet(value: Pet) {
//   let pet = {
//     name: value.name,
//     species: value.species,
//     age: value.age,
//     description: value.description,
//     image: value.image
//   }
//   this['listingsService'].postPets(pet)
//       .subscribe((response: any) => {
//         console.log(response)
//       })
// }
}

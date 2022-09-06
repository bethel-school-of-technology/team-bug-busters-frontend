import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
   Welcome to My Animal Adoption!
    <router-outlet></router-outlet>
  `,
  styles: []
})
export class AppComponent {
  title = 'my-animal-adoption';
}

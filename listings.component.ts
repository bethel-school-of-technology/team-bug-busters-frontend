import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Pet } from 'src/app/pet';

@Component({
  selector: 'app-listings',
  templateUrl: './listings.component.html',
  styleUrls: ['./listings.component.css']
})
export class ListingsComponent implements OnInit {
  private petsRoute = 'http://localhost:3000/pets';
  public pets: Pet[];

  constructor(private http: HttpClient) { }

  getPets(){
    this.http.get<Pet[]>(this.petsRoute).subscribe(pets => {
      this.pets = pets;
      console.log('Pets', this.pets)
    });
  }

  ngOnInit() {
    this.getPets();
  }

}

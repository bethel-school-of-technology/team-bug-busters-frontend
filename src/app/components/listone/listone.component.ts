import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ListingsService } from 'src/app/listings.service';
import { Pet } from 'src/app/pet';

@Component({
  selector: 'app-listone',
  templateUrl: './listone.component.html',
  styleUrls: ['./listone.component.css']
})
export class ListoneComponent implements OnInit {

  //property to store current pet info
  currentPet: Pet = new Pet();

  petID: number;

  constructor(private actRoute: ActivatedRoute, private listingsService: ListingsService) { }

  ngOnInit(): void {
    console.log(this.actRoute)
  }

}

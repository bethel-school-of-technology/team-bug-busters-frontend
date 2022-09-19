import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';


import { ListingsComponent } from '../listings/listings.component';



@NgModule({
  declarations: [ListingsComponent],
  imports: [
    CommonModule, 
    HttpClientModule,
  ],
  exports: [ListingsComponent]
})
export class PetsModule { }

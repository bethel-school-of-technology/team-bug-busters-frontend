import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { Pet } from './pet';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ListingsService {

  private myPetURL = 'http://localhost:3000/pets';
  // app.use('/pets', routes);


  constructor(private http: HttpClient) { }

  //A page to view all pets(READ)
  // getAllPets(): Observable<Pet[]> {
  //   return this.http.get<Pet[]>('http://localhost:3000/pets')
  // }

  //A page to get single pet(READ)
  //Component needs to send an ID for the pet
  getOnePet(reqID: number): Observable<Pet>{
    return this.http.get<Pet>("${this.myPetURL}/${reqID}")
  }

  //A way to edit a pet(UPDATE)
  updatePet(editID: number, edittedInfo: Pet): Observable<Pet>{
    return this.http.put<Pet>("${this.myPetURL}/${editID}", edittedInfo)
  }

  //A way to remove a pet(DELETE)
  deletePet(deleteID: number): Observable<any>{
    return this.http.delete<any>("${this.myPetURL}/${deleteID}")
  }

  //A way to create a new pet listing(CREATE)
  createPet(newPet: Pet): Observable<Pet>{
    return this.http.post<Pet>(this.myPetURL+'/pets', newPet)
  }




  ngOnInit() {  }

}

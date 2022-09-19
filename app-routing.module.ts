import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { CreateComponent } from './components/create/create.component';
import { EditComponent } from './components/edit/edit.component';
import { HomeComponent } from './components/home/home.component';
import { ListingsComponent } from './components/listings/listings.component';
import { ListoneComponent } from './components/listone/listone.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';

const routes: Routes = [
  {path: '', redirectTo: 'login', pathMatch: 'full'},

  //localhost:4200/login
  {path: 'login', component: LoginComponent},

  //localhost:4200/signup
  {path: 'signup', component: SignupComponent},

  //localhost:4200/home
  {path: 'home', component: HomeComponent},

  //localhost:4200/about-us
  {path: 'about-us', component: AboutUsComponent},

  //localhost:4200/pets
  {path: 'pets', component: ListingsComponent},

  //localhost:4200/pets/1
  {path: 'pets/:petId', component: ListoneComponent},

  //localhost:4200/create
  {path: 'create', component: CreateComponent},

  //localhost:4200/edit/1
  {path: 'edit/:petId/', component: EditComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Components/login/login.component';
import { RegisterComponent } from './Components/register/register.component';
import { SearchComponent } from './Components/search/search.component';
import { AddItemComponent } from './Components/add-item/add-item.component';


const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path: 'search', component:SearchComponent},
  {path: 'register', component:RegisterComponent},
  {path:'additem',component: AddItemComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }




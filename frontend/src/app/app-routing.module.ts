import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditItemComponent } from './Components/edit-item/edit-item.component';
import { LoginComponent } from './Components/login/login.component';
import { RegisterComponent } from './Components/register/register.component';
import { SearchComponent } from './Components/search/search.component';

const routes: Routes = [
  {path:'edit',component:EditItemComponent},
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'search',component:SearchComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }




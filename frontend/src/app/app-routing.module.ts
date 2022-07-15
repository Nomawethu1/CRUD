import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditItemComponent } from './Components/edit-item/edit-item.component';
import { LoginComponent } from './Components/login/login.component';
import { AddItemComponent } from './Components/add-item/add-item.component';

const routes: Routes = [
  {path:'edit-item',component:EditItemComponent},
  {path:'login',component:LoginComponent},
  {path: 'additem', component:AddItemComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }




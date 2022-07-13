import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { RegisterComponent } from './Components/register/register.component';
import { AddItemComponent } from './Components/add-item/add-item.component';
import { DeleteComponent } from './Components/delete/delete.component';
import { ViewItemComponent } from './Components/view-item/view-item.component';
import { SearchComponent } from './Components/search/search.component';
import { LogoutComponent } from './Components/logout/logout.component';
import { EditItemComponent } from './Components/edit-item/edit-item.component';
import { NavComponent } from './navbar/nav/nav.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './Components/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    AddItemComponent,
    DeleteComponent,
    ViewItemComponent,
    SearchComponent,
    LogoutComponent,
    EditItemComponent,
    NavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

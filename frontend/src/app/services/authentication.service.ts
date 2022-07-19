import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
// import {  HttpClient} from '@angular/core/http';
import { Observable } from 'rxjs';
import {Login} from '..///interface/login';
import { HttpClient } from '@angular/common/http';

const baseUrl = environment.baseUrl;

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private http: HttpClient) { }

  login(user : any){
    return this.http.post(`${baseUrl}login`,user);


  //  getUserDetails() {
  //   if(localStorage.getItem('userData')){
  //     return localStorage.getItem('userData')
  //   }
  //                   }
  //   function getUserDetails() {
  //     throw new Error('Function not implemented.');
  //   }
  // }
}
}


import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }

  saveData(key:string,value:string){
    localStorage.setItem(key,JSON.stringify(value));}

    getData(key:string):any{
      return JSON.parse(localStorage.getItem(key));
     }
}

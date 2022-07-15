import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class EditService {
 
 
  constructor(private http:HttpClient) { }
  id :any
  
  addItems(items:any){
    return this.http.post("http://localhost:3000/add",items)
  }
  editItems(items:any){
    return this.http.put("http://localhost:3000/edit/1",items)

  }

}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class EditService {
 
 
  constructor(private http:HttpClient) { }
  // id :any
  
  addItems(items:any):Observable<any>{
    return this.http.post<any>("http://localhost:3000/add",items);
  }

  editItems(items:any):Observable<any>{
    return this.http.put<any>('http://localhost:3000/edit:id',items);

  }

  getItems():Observable<any>{
    return this.http.get<any>("http://localhost:3000/getitem");
  }

}

import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { observable } from 'rxjs';
import { AddItemComponent } from '../Components/add-item/add-item.component';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ItemsService {
  
  baseUrl =environment.baseUrl

  constructor(private http: HttpClient) { }

     createItem(itemData: any){
      return this.http.post( `${this.baseUrl}` + '/add', itemData);
    }
    // createItems(){
    //   return this.http.post( `${this.baseUrl}` + '/createItem');
    // }


  }


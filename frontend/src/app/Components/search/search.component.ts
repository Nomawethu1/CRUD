import { Component, OnInit } from '@angular/core';
import { EditService } from 'src/app/service/edit.service';
import { ItemsService } from 'src/app/services/items.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

items : any;
view :any;
_view :any;
  too: any;


  
   

  constructor(private service:EditService, private serv:ItemsService) {
 
   }

  ngOnInit(): void {

    this.service.getItems().subscribe(data =>{
      console.log(data);
      this.items = data;
      
    })
    this._view = localStorage.getItem("inf")
    console.log(this._view , "easrdtfyguhijo")

  }

  getItem(id: any){
    this.serv.getItemByID(id+1).subscribe(data =>{
      console.log(data);
      this.view =data;
     
      // localStorage.setItem("Item", JSON.stringify(this.view));
    })
  }

  delete(id: any){
    this.serv.deleteItem(id+1).subscribe(data =>{
      console.log(data);
      this.too = data;
    })
  }

}
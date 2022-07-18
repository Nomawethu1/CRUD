import { Component, OnInit } from '@angular/core';
import { EditService } from 'src/app/service/edit.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

items : any;
  
   

  constructor(private service:EditService) { }


 

  ngOnInit(): void {

    this.service.getItems().subscribe(data =>{
      console.log(data);
      this.items = data;
      
    })


    
  }


}
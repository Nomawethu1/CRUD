import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { EditService } from 'src/app/service/edit.service';


@Component({
  selector: 'app-edit-item',
  templateUrl: './edit-item.component.html',
  styleUrls: ['./edit-item.component.scss']
})
export class EditItemComponent implements OnInit {
  form: FormGroup = new FormGroup({
    title: new FormControl(''),
    description: new FormControl(''),
    due_date: new FormControl('')});

  constructor(private FormBuilder:FormBuilder,private EditService:EditService) { }

  ngOnInit(): void {
    this.form = this.FormBuilder.group(
      {
        title:[''],
        description:[''],
        due_date:[''],
      }
    )
  }
 info:any
  onSave():void{

    const todo = {
      title: this.form.value.title,
      description: this.form.value.description,
      due_date: this.form.value.due_date

      
    }
    console.log(todo);

    this.EditService.editItems(todo).subscribe((data:any)=>{
      this.info=data

      console.log("Passed on form",this.info)

    })

    

   
    localStorage.setItem("form",todo.title);
    
  }
  onReset(): void {
    console.log(JSON.stringify(this.form.value,null,2));

    //localStorage.clear("form",JSON.stringify(this.form.value,null,2) )
    this.form.reset();
  }


  


  


  // reset(){
  //   console.log("yes");
  // }
  // save(){
  //   console.log("esdtrftyghjkl");
  // }
}



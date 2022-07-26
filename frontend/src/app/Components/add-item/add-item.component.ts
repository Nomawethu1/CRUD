import { Component, OnInit } from '@angular/core';
import { AbstractControl, Form, FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { EditService } from 'src/app/service/edit.service';
import { ItemsService } from 'src/app/services/items.service';
import { EditItemComponent } from '../edit-item/edit-item.component';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.scss']
})
export class AddItemComponent implements OnInit {
  [x: string]: any;

  form = new FormGroup({
    itemname: new FormControl(''),
    description: new FormControl(''),
    duedate: new FormControl(''),

  });
  submitted = false;
  //for getting items from local storage
  dummy: any;

  constructor(private addService:EditService, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group(
      {
        itemname: [''],
        description: [''],
        duedate: [''],
      }
    )
  }



  onSubmit(): void {

    // console.log(JSON.stringify(this.form.value, null, 2));
    console.log(this.form.value)

    // let details = {
    //   itemname: this.form.value.itemname,
    //   description: this.form.value.description,
    //   duedate: this.form.value.duedate

    // }

    // // console.log("this detsils"+ details.description)
    // this.createItem(details)
    // localStorage.setItem("form", JSON.stringify(this.form.value, null, 2))

    this.addService.addItems(this.form.value).subscribe(
      resp => {
        console.log(resp);

      },
      (err: any) => {
        console.log("wow" + err);
      }
    );
  }


  createItem(createItem: any) {
    this.addService.addItems(createItem).subscribe(
      resp => {
        console.log(resp);

      },
      (err: any) => {
        console.log("wow" + err);
      }
    );
  }





}

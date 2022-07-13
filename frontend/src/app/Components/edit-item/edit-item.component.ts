import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

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

  constructor(private FormBuilder:FormBuilder) { }

  ngOnInit(): void {
    this.form = this.FormBuilder.group(
      {
        title:[''],
        descriotion:[''],
        due_date:[''],
      }
    )
  }
  
  onSave():void{
    console.log(JSON.stringify(this.form.value,null,2));

   
    localStorage.setItem("form",JSON.stringify(this.form.value,null,2))
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

let title:Array<string>;
title = ['HTML'];

let description:Array<string>
description = ['Learn theoratical  HTML basics and practicals '];

let due_date:Array<number>
due_date = [2000];



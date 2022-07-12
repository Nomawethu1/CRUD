import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.scss']
})
export class AddItemComponent implements OnInit {

  form: FormGroup = new FormGroup({
    tittle: new FormControl(''),
    description: new FormControl(''),
    due_Date: new FormControl(''),

  });
  submitted = false;
//for getting items from local storage
  dummy:any;

  constructor(private formBuilder: FormBuilder) { }



  ngOnInit(): void {
    this.form = this.formBuilder.group(
      {
        title: [''],
        description: [''],
        due_Date: [''],
      }
    )
//for getting items from local storage
    this.dummy = localStorage.getItem("form")
  }



  onSubmit(): void {

    console.log(JSON.stringify(this.form.value, null, 2));

    localStorage.setItem("form",JSON.stringify(this.form.value, null, 2))
  }

}

import { Component, OnInit } from '@angular/core';
 import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';



@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  Form! : FormGroup;

  submitted = false;

  isSuccessful = false;

  isSignUpFailed = false;

  errorMessage = '';



  constructor(

    private router:Router) { }



  ngOnInit(): void {

    // this.Form = new FormGroup({

    //   firstname: ['', Validators.required],

    //   lastname: ['', Validators.required],

    //   email: ['', [Validators.required, Validators.email]],

    //   phonenumber:  ['', [Validators.required, Validators.pattern('[0-9]{3}-[0-9]{3}-[0-9]{4}'), Validators.maxLength(12)]],

    //   password: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(40)]],

    //   confirmpassword: ['', Validators.required],

    //   usertype: ['', Validators.required],

    // },

    // );


    this.Form = new FormGroup({
      email : new FormControl('',[Validators.required, Validators.email] ),
      password: new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(40)]),
      newpassword: new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(40)])
    })

  }

  get f():{ [key: string]: AbstractControl }{

    return this.Form.controls;

  }



  onSubmit():void{

    this.submitted = true;

    let usertype = this.Form.value.usertype;

    let status = true;



    let user = {

      email: this.Form.value.email,
      password : this.Form.value.password,
      confirmpassword : this.Form.value.confirmpassword,

    }
  }
}
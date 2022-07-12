import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  login:any = FormGroup;
  router: any;
 
  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
   this.login = this.fb.group({

    name:['', Validators.required],
    email:['', Validators.compose([Validators.required,Validators.email])]

   })
  }

   loginSubmit(data:any){

    console.log(data);   
  }

  gotToRegister(){
    this.router.navigate(['register']);
  }

}

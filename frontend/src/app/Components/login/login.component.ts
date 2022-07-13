import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  login! : FormGroup;
  router: any;
 
  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
   this.login = this.fb.group({
        username:[''],
        password:['']
   })
  }

 
  onSubmit(){
    console.log(this.login.value)
  }

  gotToRegister(){
    this.router.navigate(['register']);
  }

}

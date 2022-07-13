import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  login! : FormGroup;
  router: any;

  constructor() { }

  ngOnInit(): void {
   this.login = new FormGroup({
        username: new FormControl(['']),
        password: new FormControl([''])
   })
  }

 
  onSubmit(){
    console.log(this.login.value)
  }

  gotToRegister(){
    this.router.navigate(['register']);
  }

}

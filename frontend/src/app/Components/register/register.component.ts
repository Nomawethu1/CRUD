import { Component, OnInit } from '@angular/core';
 import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
   register! : FormGroup;
   router: any;

  constructor() { }

  ngOnInit(): void {

     this.register = new FormGroup(
      {
          username: new FormControl('', Validators.required),
          password: new FormControl('', Validators.required)
      })
  }



   onSubmit(){
   console.log(this.register.value)
   }

   gotToRegister(){
    this.router.navigate(['login']);
   }

}

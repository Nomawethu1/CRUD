import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  register!: FormGroup;
  router: any;

  form!: FormGroup
  submitted = false;
  isSuccessful = false;
  isSignUpFailed = false;

  constructor(private userServivce: UserService) { }



  ngOnInit(): void {

    this.form = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(40)]),
      confirmpassword: new FormControl('', [Validators.required])
    },
    );

  }

  get f(): { [key: string]: AbstractControl } {
    return this.form.controls;
  }



  onSubmit(): void {

    this.submitted = true;
    let user = {
      email: this.form.value.email,
      password: this.form.value.password,
    }
    console.log(user)


    this.addUser(user);

    this.router.navigate(['/login'])
  }


  addUser(user: any) {
    this.userServivce.adduser(user).subscribe((res: any) => {
      console.log(res);

    })
  }




}

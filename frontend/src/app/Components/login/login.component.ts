import { Component, ComponentFactoryResolver, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';




@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  login!: FormGroup;
  Form = new FormGroup({
    username: new FormControl(''),
    password: new FormControl('')
  });
  //router: any;

  constructor(private auth: AuthenticationService,
    private router: Router,
    private activeRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.login = new FormGroup(
      {
        username: new FormControl('', Validators.required),
        password: new FormControl('', Validators.required)
      })

  }


  loginUser() {
    // console.log(this.login.value)
    // const user = window.localStorage.setItem('User', JSON.stringify(this.login.value));
    // const user = {
    //   username: this.Form.value.username,
    //   password: this.Form.value.password
    // }
    
    window.localStorage.setItem('user', JSON.stringify(this.login.value));

    this.router.navigate(['/search']);
  }



  gotToRegister() {
    this.router.navigate(['register']);
  }

}

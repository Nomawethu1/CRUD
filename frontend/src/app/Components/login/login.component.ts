import { Component, ComponentFactoryResolver, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { AuthService } from 'src/app/services/auth.service';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { AbsoluteSourceSpan } from '@angular/compiler';
// import Validation from './utils/validation';




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
  isLogin:boolean = false;
  constructor(private auth: AuthenticationService,
    private router: Router,
    private activeRoute: ActivatedRoute,
    private _api: ApiService, 
    private _auth: AuthService, 
    private _router:Router) { }
//new
    get f(): {[key: string]: AbstractControl}{
      return this.Form.controls;
    }

    // validators
    

  ngOnInit(): void {
    this.login = new FormGroup(
      {
        //new
        // this.form = new FormGroup({
        //   uusername: new FormControl('', [Validators.required]),
        //   password: new FormControl('', [Validators.required]),
        // })


        username: new FormControl('', Validators.required),
        password: new FormControl('', Validators.required),


      })

  }


  loginUser() {

    //new
//     const userDetails = {
//       data: {
//         username: this.Form.value.username,
//         password: this.Form.value.password
//       }
// if (this.form.invalid){
//   return;
// }
// else{
//   this.user.login(userDetails.data).subscribe(myData: any) =>{

// }

// }

//     }
    
    
    window.localStorage.setItem('user', JSON.stringify(this.login.value));

    this.router.navigate(['/search']);
  }



  gotToRegister() {
    this.router.navigate(['register']);
  }

}

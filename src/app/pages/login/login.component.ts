import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  email: string="angularuser2@gmail.com";
  password: string="angularuser2";

  // email: string="";
  // password: string="";

  emailerr= false;
  passerr= false;

  loginError=false;
  loading= false;
  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    if (this.authService.getToken()) {
      this.router.navigate(['/home']);
    }
  }

  login(){
    if(this.email !="" && this.password!=""){
      this.passerr=false;
      this.emailerr=false;
      this.loginError=false;
      this.loading=true;
      this.authService.login(this.email, this.password).subscribe((data: any)=>
        {
          console.log('Login Success', data);
          localStorage.setItem('token', data.token);
          this.authService.isLoggedIn=true;
          this.router.navigate(['/home']);
        }, err=>{
          this.loginError=true
          console.log("Login Error", err.message)
          this.loading=false;
        },()=>{
          this.loading=false;
        })
    }else{
      if(this.email === ""){
          this.emailerr=true
      }
      if(this.password === ""){
        this.passerr=true
      }
    }
    
  }
  
}

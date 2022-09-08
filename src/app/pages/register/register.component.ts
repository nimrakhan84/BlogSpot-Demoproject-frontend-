import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registerError=false;
  loading = false;
  name: string="";
  email: string="";
  password: string="";
  emailerr= false;
  passerr= false;
  nameerr=false;


  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    if (this.authService.getToken()) {
      this.router.navigate(['/home']);
    }

}

  register(){
    this.registerError = false;
    this.loading = true;
    this.passerr=false;
    this.emailerr=false;
    this.nameerr=false;
      
    if (this.email !="" && this.name !="" && this.password!=null){
        this.authService.register(this.name,this.email,this.password).subscribe((data: any) =>{
          console.log(data.message);
          this.router.navigate(['/login']);
        },err=>{
          this.registerError=true;
          }
          
   ) }
   else{
    if(this.email === ""){
        this.emailerr=true
    }
    if(this.password === ""){
      this.passerr=true
    }
    if(this.name === ""){
      this.nameerr=true
    }
  }
  }
    
  
}

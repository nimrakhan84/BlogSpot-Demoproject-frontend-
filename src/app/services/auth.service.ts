import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isLoggedIn = localStorage.getItem("token") ? true : false;
  
  constructor(private httpClient: HttpClient) { }

  login(email: string, password: string){
    return this.httpClient.post("http://localhost:3000/auth/login",{email,password})
  }

  register(name:string, email: string, password: string){
    return this.httpClient.post("http://localhost:3000/auth/register",{name,email, password})
  }

  getToken(){
    return localStorage.getItem('token');
  }
}

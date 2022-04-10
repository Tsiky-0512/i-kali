import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { api } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) { }


  inscription(data:any){
    return this.http.post(api+"/auth/user/inscription",data);
  }

  validation(data:any){
    return this.http.post(api+"/auth/user/check",data);
  }

  login(data:any){
    return this.http.post(api+"/auth/user/login",data);
  }
}

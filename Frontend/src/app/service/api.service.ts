
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { User } from '../interface/user'
import { retry } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(private http: HttpClient) { }
  private tokenName = environment.tokenName;
  private server = environment.serverUrl;
  
  getToken():String | null{
    return localStorage.getItem(this.tokenName);
  }

  tokenHeader():{ headers: HttpHeaders }{
    const token = this.getToken();
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    return { headers }
  }

  userRegistration(user:User){
    return this.http.post(this.server + '/users/register', user);
  }
  login(user:User){
    return this.http.post(this.server + '/users/login', user);
  }
  // token-nel védett metódusok:
  //  return this.http.get(this.tokenHeader());
}
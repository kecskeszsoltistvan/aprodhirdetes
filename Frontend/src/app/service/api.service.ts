
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { User } from '../interface/user'
import { retry } from 'rxjs';
import { Advert } from '../interface/advert';
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(private http: HttpClient) { }
  private tokenName = environment.tokenName;
  private server = environment.serverUrl;
  private httpOptions = {
    headers: new HttpHeaders({
     "Content-Type": "multipart/form-data"
    })
  };
  
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

  uploadAd(ad:FormData){
    return this.http.post(this.server + '/adverts/add', ad);
  }

  getUserAds(uid:JSON){
    return this.http.post(this.server + '/adverts/fetchByID', uid);
  }

  getAllAds(){
    return this.http.get(this.server + '/adverts/fetchAll');
  }

  deleteAdByIMG(img:any){
    return this.http.delete(this.server + `/adverts/delete/${img}`, this.tokenHeader())
  }
  // token-nel védett metódusok:
  //  return this.http.get(this.tokenHeader());
}
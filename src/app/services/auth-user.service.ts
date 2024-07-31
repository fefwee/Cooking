import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../environments/environment";
import {AuthResponseUser, UserAuth, UserRegister} from "../types/types";

@Injectable({
  providedIn: 'root'
})
export class AuthUserService {

  private authUrl: string;
  private registerUrl: string;


  constructor(private http: HttpClient) {
    this.authUrl = environment.auth;
    this.registerUrl = environment.register;
  }


  public authUser(user: UserAuth): Observable<AuthResponseUser> {
    const times = user.fastSession;
    const newUrl = times ? `${this.authUrl}?fastJwt=${times}` : this.authUrl;
    return this.http.post<AuthResponseUser>(newUrl, user);
  }

  public registerUser(user: UserRegister): Observable<AuthResponseUser> {
    return this.http.post<AuthResponseUser>(this.registerUrl, user);
  }
}

import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../environments/environment";
import {Observable} from "rxjs";
import {SingleUser, User} from "../types/types";

@Injectable({
  providedIn: 'root'
})
export class GetUsersService {


  private url: string;
  private  deleteUrl: string;


  constructor(private http: HttpClient) {
    this.url = environment.getAllUsers;
    this.deleteUrl = environment.deleteUser;
  }

  public getAllUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.url);
  }

  public getSingleUser(uuid: string | null): Observable<SingleUser> {
    return this.http.get<SingleUser>(`${this.url}${uuid}`);
  }

  public deleteUsers(id:string):Observable<any>{
    const url = this.deleteUrl+id;
    return this.http.delete(url);
  }
}

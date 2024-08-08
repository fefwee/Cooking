import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../environments/environment";
import {Observable} from "rxjs";
import {AddComment} from "../types/types";

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  private url: string;

  constructor(private http: HttpClient) {
    this.url = environment.addComment
  }

  public addComment(uuid: string,text:AddComment): Observable<AddComment> {
    const newUrl = this.url + uuid + "/add-comment";
    return this.http.post<AddComment>(newUrl,text);
  }
}

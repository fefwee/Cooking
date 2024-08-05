import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable, BehaviorSubject, switchMap, take } from 'rxjs';
import { Store } from '@ngxs/store';
import { UserState } from '../store/store';
import { userStateModel } from '../store/models/user.model';

@Injectable()
export class AuthInterseptorInterceptor implements HttpInterceptor {

  private tokenSubject: BehaviorSubject<string | null> = new BehaviorSubject<string | null>(null);

  constructor(private store: Store) {
    this.store.select(UserState.getUser).subscribe((user: userStateModel) => {
      this.tokenSubject.next(user?.jwtToken || null);
    });
  }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return this.tokenSubject.pipe(
      take(1),
      switchMap(token => {
        if (token) {
          const authReq = request.clone({
            setHeaders: {
              Authorization: `Bearer ${token}`
            }
          });
          return next.handle(authReq);
        }
        return next.handle(request);
      })
    );
  }
}

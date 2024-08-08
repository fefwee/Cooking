import {inject} from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivateFn,
  Router,
  RouterStateSnapshot,
  UrlTree
} from '@angular/router';
import {Observable, of} from 'rxjs';
import {Store} from '@ngxs/store';
import {UserState} from "../store/store";
import {map, take} from 'rxjs/operators';

export const roleAccessGuard: CanActivateFn =
  (route: ActivatedRouteSnapshot, state: RouterStateSnapshot): | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree => {

    const store = inject(Store);
    const router = inject(Router);

    return store.select(UserState.getUser).pipe(
      take(1),
      map(user => {
        const requiredRole = route.data['requiredRole'] as string;

        if (!user.jwtToken) {
          if (requiredRole === 'guest') {
            return true;
          }
          return router.parseUrl('/authorization');
        }

        if ((requiredRole === 'registered' && (user.role === 'user' || user.role === 'admin')) ||
          (requiredRole === 'admin' && user.role === 'admin')) {
          return true;
        }

        return router.parseUrl('/noaccess');
      })
    );
  };

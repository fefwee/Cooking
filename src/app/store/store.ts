import {Injectable} from '@angular/core';
import {Action, Selector, State, StateContext} from '@ngxs/store';
import {AuthUser, LogoutUser, userStateModel} from './models/user.model';
import {AuthUserService} from '../services/auth-user.service';
import {catchError, tap} from 'rxjs/operators';
import {EMPTY} from "rxjs";
import {NotificationService} from "../services/notification.service";


@State<userStateModel>({
  name: 'UserState',
  defaults: {
    id: "",
    role: "",
    firstName: "",
    lastName: "",
    middleName: "",
    avatar: "",
    username: "",
    jwtToken: "",
    expiresIn: null
  }
})

@Injectable()
export class UserState {

  constructor(
    private serviceAuth: AuthUserService,
    private notificationService: NotificationService) {
  }

  @Selector()
  static getUser(state: userStateModel) {
    return state;
  };

  @Action(AuthUser)
  AuthUser(
    {getState, setState}: StateContext<userStateModel>,
    {payload}: AuthUser) {
    return this.serviceAuth.authUser(payload).pipe(
      tap((res) => {
          const state = getState();
          setState({
            ...state,
            id: res.id,
            role: res.role,
            firstName: res.firstName,
            lastName: res.lastName,
            middleName: res.middleName,
            avatar: res.avatar,
            username: res.username,
            jwtToken: res.jwtToken,
            expiresIn: res.expiresIn
          })
        }
      ),
      catchError((error): any => {
      })
    )
  }

  @Action(LogoutUser)
  LogoutUser({ setState }: StateContext<userStateModel>) {
    setState({
      id: "",
      role: "",
      firstName: "",
      lastName: "",
      middleName: "",
      avatar: "",
      username: "",
      jwtToken: "",
      expiresIn: null
    });
  }
}

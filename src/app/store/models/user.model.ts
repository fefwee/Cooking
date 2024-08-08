import {UserAuth} from "../../types/types";

export interface userStateModel {
  id: string | undefined
  role: string | undefined
  firstName: string | undefined
  lastName: string | undefined
  middleName: string | undefined
  avatar: string | undefined
  username: string | null
  jwtToken: string | undefined
  expiresIn: number | null
}


export class AuthUser {
  static readonly type = '[User] Auth User'

    constructor(public payload: UserAuth) {
  }
}

export class LogoutUser {
  static readonly type = '[User] Logout';
}



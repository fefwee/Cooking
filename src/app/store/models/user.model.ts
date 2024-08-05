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


export class GetUser {
  static readonly type = '[User]: Get User '
};

export class AuthUser {
  static readonly type = '[User] Auth User'

    constructor(public payload: UserAuth) {
  }
}

export class AddUser {
  static readonly type = '[User]: Add User';

  constructor(public payload: {
    username: string
    password: string
  }) {
  }
};

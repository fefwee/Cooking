export interface UserAuth {
  username: string
  password: string
  fastSession:boolean
}

export interface UserRegister {
  username: string
  password: string
  firstName: string,
  lastName: string,
  middleName: string
}

export interface AuthResponseUser {
  id: string,
  role: string,
  firstName: string,
  lastName: string,
  middleName: string,
  avatar: string,
  username: string,
  jwtToken: string,
  expiresIn: 0
}


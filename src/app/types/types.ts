export interface UserAuth {
  username: string
  password: string
  fastSession: boolean
}

export interface UserRegister {
  username: string
  password: string
  firstName: string
  lastName: string
  middleName: string
}

export interface AuthResponseUser {
  id: string
  role: string
  firstName: string
  lastName: string
  middleName: string
  avatar: string
  username: string
  jwtToken: string
  expiresIn: 0
}

export interface Recipe {
  id: string
  body: string
  title: string
  tags: [
    string
  ]
  image: string
  timeCooking: 0
  author: {
    id: string
    avatar: string
    firstName: string
    lastName: string
    middleName: string
  }
  createdOn: string
  updatedOn: string
}

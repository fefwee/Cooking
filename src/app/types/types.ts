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
  expiresIn: 0 | null
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


export interface FoodValue {
  calories: number
  fats: number
  carbohydrates: number
  proteins: number
}


export interface CookingStep {
  title: string
  description: string
}


export interface Ingredient {
  title: string
  description: string
}


export interface Author {
  id: string
  avatar: string
  firstName: string
  lastName: string
  middleName: string
}


export interface RecipeSingle {
  id: string
  body: string
  title: string
  tags: string[]
  image: string
  timeCooking: number
  foodValue: FoodValue
  cookingSteps: CookingStep[]
  ingredients: Ingredient[]
  author: Author
  comments: Comments[]
  createdOn: string
  updatedOn: string
}

export interface Comments {
  id: string
  postId: string
  createdOn: string
  updatedOn: string
  text: string
  user: {
    avatar: string
    id: string
    firstName: string
    lastName: string
    middleName: string
    username: string
  }
}

export interface User {
  username: string
  role: string
  firstName: string
  lastName: string
  middleName: string
  avatar: string
  createdOn: string
  updatedOn: string
  lastEntry: string
  isActive: true
  id: string
}

export interface SingleUser {
  username: string
  role: string
  firstName: string
  lastName: string
  middleName: string
  avatar: string
  userAgent: string
  createdOn: string
  updatedOn: string
  lastEntry: string
  isActive: true
  posts: [
    {
      id: string
      body: string
      title: string
      createdOn: string
      updatedOn: string
      _count: {
        comments: number
      }
      image: string
    }
  ]
  comments: [
    {
      id: string
      postId: string
      text: string
      createdOn: string
      updatedOn: string
    }
  ]
  id: string
}

export interface CreateRecipe {
  body: string
  title: string
  tags: [
    string
  ]
  image: string
  timeCooking: number
  foodValue: {
    calories: number
    fats: number
    carbohydrates: number
    proteins: number
  }
  cookingSteps: [
    {
      title: string
      description: string
    }
  ]
  ingredients: [
    {
      title: string
      description: string
    }
  ]
}
export interface AddComment{
    text: string
}

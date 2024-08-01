
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


export  interface FoodValue {
  calories: number;
  fats: number;
  carbohydrates: number;
  proteins: number;
}


 export  interface CookingStep {
  title: string;
  description: string;
}


export  interface Ingredient {
  title: string;
  description: string;
}


export  interface Author {
  id: string;
  avatar: string;
  firstName: string;
  lastName: string;
  middleName: string;
}


export  interface Comment {
  id: string;
  postId: string;
  user: {};
  text: string;
  createdOn: string;
  updatedOn: string;
}


export interface RecipeSingle {
  id: string;
  body: string;
  title: string;
  tags: string[];
  image: string;
  timeCooking: number;
  foodValue: FoodValue;
  cookingSteps: CookingStep[];
  ingredients: Ingredient[];
  author: Author;
  comments: Comment[];
  createdOn: string;
  updatedOn: string;
}


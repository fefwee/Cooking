import {Component, OnInit} from '@angular/core';
import {SingleUser} from "../../../types/types";
import {GetUsersService} from "../../../services/get-users.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-single-user',
  templateUrl: './single-user.component.html',
  styleUrls: ['./single-user.component.css']
})
export class SingleUserComponent implements OnInit {

/*  public user: SingleUser = {
    avatar: "",
    comments: [{createdOn: "", id: "", postId: "", text: "", updatedOn: ""}],
    createdOn: "",
    firstName: "",
    id: "",
    isActive: true,
    lastEntry: "",
    lastName: "",
    middleName: "",
    posts: [{_count: {comments: 0}, body: "", createdOn: "", id: "", image: "", title: "", updatedOn: ""}],
    role: "",
    updatedOn: "",
    userAgent: "",
    username: ""

  }*/
public user:any =
{
  "id": "fb80c837-a44f-4e43-ac01-fcdc8a117200",
  "username": "admin",
  "role": "admin",
  "firstName": "Petr",
  "lastName": "Petrov",
  "middleName": "Petrovich",
  "avatar": "https://avatars.githubusercontent.com/u/47239541",
  "userAgent": "Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Mobile Safari/537.36",
  "createdOn": "2024-07-27T23:22:13.961Z",
  "updatedOn": "2024-08-05T12:19:53.567Z",
  "lastEntry": "2024-08-05T12:19:53.566Z",
  "isActive": true,
  posts: [
    {
      "id": "0cd2807e-7235-4575-9b60-93c65a969f03",
      "title": "Арбузный лимонад",
      "body": "Арбузный лимонад — яркий, освежающий напиток на каждый день. В нем много витаминов, а также ценный пектин. Ежедневное употребление лимонада помогает предотвратить появление онкологических заболеваний. Все благодаря входящему в его состав арбузу. Чаще всего мы едим фрукт кусочками. Но из его мякоти, лимонного сока, веточки свежей мяты и сахара можно приготовить настоящий шедевр. Вместо обычной воды разбавьте напиток газированной. Веселый пузырьки придадут ему легкости. А если есть особый повод, то добавьте белый ром: он превратит лимонад в элегантный алкогольный коктейль. К приходу гостей, позаботьтесь об украшении. Долька лимона, кусочек арбуза и листик мяты — то, что нужно. Как только вы попробуете наш лимонад, то полюбите его всей душой.",
      "createdOn": "2024-08-03T13:30:40.441Z",
      "updatedOn": "2024-08-03T13:30:40.441Z",
      "_count": {
        "comments": 2
      },
      "image": "https://images.gastronom.ru/ZorN65FgSKItFM9pMxF7khZ9GhtjfCKaf5g1fUZ1ffQ/pr:recipe-cover-image/g:ce/rs:auto:0:0:0/L2Ntcy9hbGwtaW1hZ2VzLzIxNGM2NDE2LTQyMGYtNGZkNS04N2QxLWExMTg3MzczYmFhNy5qcGc.webp"
    },
    {
      "id": "25968a42-582e-4ab2-8152-9c05d2f62e49",
      "title": "Омлет рулетом с колбасой и сыром",
      "body": "Омлет рулетом с колбасой и сыром приготовить несложно, но на него потребуется несколько больше времени, чем на обычный омлет, поскольку он запекается в духовке дважды — сначала сам по себе, а затем уже в виде рулета с начинкой. Впрочем, вашего активного участия понадобится совсем немного: даже смесь из яиц для омлета в этом рецепте взбивается блендером. Вам понадобится нарезать колбасу и зелень и натереть сыр, а затем завернуть их в остывший омлет и снова отправить запекаться в духовку ненадолго.",
      "createdOn": "2024-08-03T13:41:59.914Z",
      "updatedOn": "2024-08-03T13:41:59.914Z",
      "_count": {
        "comments": 2
      },
      "image": "https://images.gastronom.ru/iaOVilF97jzJfHCoZmDU_0PIV4JBLV0gDV7dkweCPy4/pr:recipe-cover-image/g:ce/rs:auto:0:0:0/L2Ntcy9hbGwtaW1hZ2VzLzFiNzA1YmM0LTY2YTQtNDgwYS1hZTY3LTA3NzQ5ZDY4NjE5Zi5qcGc.webp"
    },
    {
      "id": "897527c8-10b4-4ecf-845e-5710d2f510d0",
      "title": "Манник с клубникой",
      "body": "Воздушный и мягкий манник отлично дополнит начинка из клубники. Просто разрежьте ягоды на половинки или четвертинки, а затем выложите на тесто или смешайте с ним. Мы залили клубнику тестом с двух сторон. Так у пирога получилась красивая ягодная прослойка на срезе.",
      "createdOn": "2024-07-28T00:31:02.643Z",
      "updatedOn": "2024-07-28T00:31:02.643Z",
      "_count": {
        "comments": 4
      },
      "image": "https://cdn.food.ru/unsigned/fit/1080/810/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYyMC8zb0NZdkEuanBlZw.webp"
    },
    {
      "id": "11a4159a-2b20-4bec-bfb1-2003018a9282",
      "title": "Осенний салат",
      "body": "Продукты к этому салату можно найти на прилавках магазинов круглый год. Мандарины придают ему осеннюю нотку и напоминают о новогодних каникулах. Из сортов сыра лучше взять камамбер или дорблю. А если не любите грецкие орехи, то их легко заменить на фундук, миндаль или ореховую смесь.",
      "createdOn": "2024-07-28T22:32:06.049Z",
      "updatedOn": "2024-07-28T22:32:06.049Z",
      "_count": {
        "comments": 3
      },
      "image": "https://cdn.food.ru/unsigned/fit/1080/810/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDcxMy8zNmphTUEuanBlZw.webp"
    },
    {
      "id": "86d87690-2c5b-45aa-882d-780a603047b3",
      "title": "Торт с клубничным муссом",
      "body": "Для приготовления этого торта не обязательно иметь духовку. Измельченное с маслом печенье становится его основой, которая дополняется клубничным муссом. Важно дать торту постоять в холоде, чтобы стабилизироваться. Можете дополнить торт, сделав прослойку из свежих ягод.",
      "createdOn": "2024-07-28T22:36:46.393Z",
      "updatedOn": "2024-07-28T22:36:46.393Z",
      "_count": {
        "comments": 2
      },
      "image": "https://cdn.food.ru/unsigned/fit/1080/810/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYyMC80VWtWV1guanBlZw.webp"
    },
    {
      "id": "e7c1e9c0-5291-45d4-ba36-86c6f67597aa",
      "title": "Тестовый рецепт",
      "body": "Этот рецепт тестовый",
      "createdOn": "2024-07-28T00:22:52.777Z",
      "updatedOn": "2024-07-28T00:22:52.777Z",
      "_count": {
        "comments": 0
      },
      "image": "Тестовый рецепт"
    }
  ],
  "comments": [
    {
      "id": "9cfe2971-7211-4e5b-ba52-c0802f4d8574",
      "postId": "8ea6e4c7-858c-4073-9027-d3fe49b6dde3",
      "text": "Nice",
      "createdOn": "2024-07-28T00:23:37.128Z",
      "updatedOn": "2024-07-28T00:23:37.128Z"
    },
    {
      "id": "44cd239a-6f63-41b0-8bb2-f4086d14c776",
      "postId": "0c0dcc52-2d15-43b1-94c7-2a1d9f0cb7b5",
      "text": "string",
      "createdOn": "2024-08-02T11:05:46.794Z",
      "updatedOn": "2024-08-02T11:05:46.794Z"
    },
    {
      "id": "f732d6fb-5a6d-41e8-a961-a0cf5e56b518",
      "postId": "0c0dcc52-2d15-43b1-94c7-2a1d9f0cb7b5",
      "text": "string",
      "createdOn": "2024-08-02T11:06:12.123Z",
      "updatedOn": "2024-08-02T11:06:12.123Z"
    },
    {
      "id": "7bb7628e-29cc-461a-b7df-e40be97c8f39",
      "postId": "0c0dcc52-2d15-43b1-94c7-2a1d9f0cb7b5",
      "text": "asdasd",
      "createdOn": "2024-08-02T12:15:53.410Z",
      "updatedOn": "2024-08-02T12:15:53.410Z"
    },
    {
      "id": "78b6c919-bfe6-4e68-89e7-cf5120b85a1f",
      "postId": "0c0dcc52-2d15-43b1-94c7-2a1d9f0cb7b5",
      "text": "asdasdasd",
      "createdOn": "2024-08-02T17:24:30.002Z",
      "updatedOn": "2024-08-02T17:24:30.002Z"
    },
    {
      "id": "f024ddc6-71ae-4799-bdc2-26d93c8e095e",
      "postId": "0c0dcc52-2d15-43b1-94c7-2a1d9f0cb7b5",
      "text": "asdasdasdasd",
      "createdOn": "2024-08-03T08:34:53.159Z",
      "updatedOn": "2024-08-03T08:34:53.159Z"
    },
    {
      "id": "21909316-8389-419c-9c3d-9f9faef9e985",
      "postId": "25968a42-582e-4ab2-8152-9c05d2f62e49",
      "text": "Шавуха из яиц ))))))))))))",
      "createdOn": "2024-08-03T22:19:54.401Z",
      "updatedOn": "2024-08-03T22:19:54.401Z"
    },
    {
      "id": "55686a6d-89b1-46c9-96e7-6c5a287e1224",
      "postId": "11a4159a-2b20-4bec-bfb1-2003018a9282",
      "text": "Как раз - осень уже на носу...\nБлин, лето хочу, еще пару лет непрерывно...",
      "createdOn": "2024-08-03T22:32:14.775Z",
      "updatedOn": "2024-08-03T22:32:14.775Z"
    },
    {
      "id": "26610e46-4367-422b-bcbc-99e33f444d0f",
      "postId": "86d87690-2c5b-45aa-882d-780a603047b3",
      "text": "А можно заменить сливочное масло на маргарин?",
      "createdOn": "2024-08-03T22:33:39.310Z",
      "updatedOn": "2024-08-03T22:33:39.310Z"
    },
    {
      "id": "6ad54c9d-8626-4635-939e-e9e926a852d3",
      "postId": "0c0dcc52-2d15-43b1-94c7-2a1d9f0cb7b5",
      "text": "asdasdas",
      "createdOn": "2024-08-04T09:38:44.642Z",
      "updatedOn": "2024-08-04T09:38:44.642Z"
    },
    {
      "id": "ced11e8b-4475-464e-bd42-4ea1670a6a5f",
      "postId": "897527c8-10b4-4ecf-845e-5710d2f510d0",
      "text": "dfgd",
      "createdOn": "2024-08-04T09:45:24.413Z",
      "updatedOn": "2024-08-04T09:45:24.413Z"
    },
    {
      "id": "8f327f78-d992-4a77-b125-b4eff40009dd",
      "postId": "897527c8-10b4-4ecf-845e-5710d2f510d0",
      "text": "А, что, из манки тоже можно печь пироги? ^_^",
      "createdOn": "2024-08-04T11:19:12.253Z",
      "updatedOn": "2024-08-04T11:19:12.253Z"
    },
    {
      "id": "796b310f-3a46-49ab-bee8-af604a9ed8a3",
      "postId": "897527c8-10b4-4ecf-845e-5710d2f510d0",
      "text": "Да =)",
      "createdOn": "2024-08-04T12:20:30.301Z",
      "updatedOn": "2024-08-04T12:20:30.301Z"
    },
    {
      "id": "0df39e4e-92ae-4190-8414-96a1b5c2e136",
      "postId": "1466956b-bea4-40bd-aa3c-8e42258f561d",
      "text": "Зато с томатной пастой!",
      "createdOn": "2024-08-04T12:30:30.046Z",
      "updatedOn": "2024-08-04T12:30:30.046Z"
    },
    {
      "id": "d0623cf3-1e27-4aa3-bf8c-367d1c687183",
      "postId": "8ea6e4c7-858c-4073-9027-d3fe49b6dde3",
      "text": "Подтверждаю!",
      "createdOn": "2024-08-04T12:33:47.986Z",
      "updatedOn": "2024-08-04T12:33:47.986Z"
    },
    {
      "id": "dd0342dd-0de5-49c4-bd79-906df8e72830",
      "postId": "402630d4-5f2a-4fd6-91a6-f37d844033d9",
      "text": "Очень вкусно!",
      "createdOn": "2024-08-04T17:19:20.943Z",
      "updatedOn": "2024-08-04T17:19:20.943Z"
    },
    {
      "id": "0447249d-d3fd-48a7-8e91-b76e411a2682",
      "postId": "86d87690-2c5b-45aa-882d-780a603047b3",
      "text": "Нет...",
      "createdOn": "2024-08-04T18:25:30.759Z",
      "updatedOn": "2024-08-04T18:25:30.759Z"
    },
    {
      "id": "4928291b-4c6a-4dd5-a611-0ba36399b4f8",
      "postId": "897527c8-10b4-4ecf-845e-5710d2f510d0",
      "text": "Очень вкусно!",
      "createdOn": "2024-08-05T09:58:14.866Z",
      "updatedOn": "2024-08-05T09:58:14.866Z"
    },
    {
      "id": "608c29d9-e97f-475a-9037-5cc001c2f06a",
      "postId": "0c0dcc52-2d15-43b1-94c7-2a1d9f0cb7b5",
      "text": "qwerewr",
      "createdOn": "2024-08-05T11:36:13.255Z",
      "updatedOn": "2024-08-05T11:36:13.255Z"
    },
    {
      "id": "b89f51e9-1af6-4f5e-b4d4-c1d9c8de57d4",
      "postId": "0c0dcc52-2d15-43b1-94c7-2a1d9f0cb7b5",
      "text": "qwerewr",
      "createdOn": "2024-08-05T11:36:48.356Z",
      "updatedOn": "2024-08-05T11:36:48.356Z"
    },
    {
      "id": "0dc8c807-ad1c-4bdf-8cdc-53c48c20969f",
      "postId": "402630d4-5f2a-4fd6-91a6-f37d844033d9",
      "text": "дайте два!",
      "createdOn": "2024-08-05T11:45:25.108Z",
      "updatedOn": "2024-08-05T11:45:25.108Z"
    },
    {
      "id": "179c0749-7f37-46bd-99d7-ff60f1bf99a3",
      "postId": "11a4159a-2b20-4bec-bfb1-2003018a9282",
      "text": "asf af af",
      "createdOn": "2024-08-05T11:59:33.344Z",
      "updatedOn": "2024-08-05T11:59:33.344Z"
    },
    {
      "id": "7da75364-cd3d-4d5c-a137-96bd74fd182a",
      "postId": "11a4159a-2b20-4bec-bfb1-2003018a9282",
      "text": "asf af af",
      "createdOn": "2024-08-05T11:59:44.026Z",
      "updatedOn": "2024-08-05T11:59:44.026Z"
    },
    {
      "id": "442c9fe9-6da1-4355-a5be-d8d11baf9466",
      "postId": "0c0dcc52-2d15-43b1-94c7-2a1d9f0cb7b5",
      "text": "asf",
      "createdOn": "2024-08-05T12:05:50.162Z",
      "updatedOn": "2024-08-05T12:05:50.162Z"
    },
    {
      "id": "248cf6ff-b013-4604-a829-9c3dc141aaf9",
      "postId": "0c0dcc52-2d15-43b1-94c7-2a1d9f0cb7b5",
      "text": "asf asf af ",
      "createdOn": "2024-08-05T12:06:10.045Z",
      "updatedOn": "2024-08-05T12:06:10.045Z"
    },
    {
      "id": "7dabac01-2c4e-49c4-8188-8d4636ccf44c",
      "postId": "0c0dcc52-2d15-43b1-94c7-2a1d9f0cb7b5",
      "text": "prprpprr",
      "createdOn": "2024-08-05T12:13:22.555Z",
      "updatedOn": "2024-08-05T12:13:22.555Z"
    },
    {
      "id": "162cdc32-3465-4c05-ab1a-626ed04565ca",
      "postId": "0cd2807e-7235-4575-9b60-93c65a969f03",
      "text": "идеальная пара))",
      "createdOn": "2024-08-05T12:19:51.581Z",
      "updatedOn": "2024-08-05T12:19:51.581Z"
    }
  ]
}

  constructor(private getsUserService: GetUsersService, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
   this.getsUserService.getSingleUser(id).subscribe({
      next: (val: SingleUser) => {
        this.user = val;
      }
    })
  }
}

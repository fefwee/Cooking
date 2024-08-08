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

  public user: SingleUser = {
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

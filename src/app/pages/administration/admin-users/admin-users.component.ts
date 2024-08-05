import {Component, OnInit} from '@angular/core';
import {User} from "../../../types/types";
import {GetUsersService} from "../../../services/get-users.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-admin-users',
  templateUrl: './admin-users.component.html',
  styleUrls: ['./admin-users.component.css']
})
export class AdminUsersComponent implements OnInit {


    public users: User[] = [];

/*  public users: any = [
    {
      firstName: '213',
      lastName: '123'
    },
    {
      firstName: '213',
      lastName: '123'
    }
  ];*/

  constructor(private getAllUsersService: GetUsersService, private router: Router) {
  }

  ngOnInit(): void {
       this.getAllUsersService.getAllUsers().subscribe({
          next: (user: User[]) => {
            this.users = user;
          }
        })
  }

  public navigateToUser(id: string) {
    console.log(id)
    this.router.navigate([`/admin/users//${id}`])
  };
}

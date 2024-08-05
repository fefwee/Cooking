import {Component, OnInit} from '@angular/core';
import {AuthUserService} from "../../../services/auth-user.service";
import {Store} from "@ngxs/store";
import {UserState} from "../../../store/store";
import {userStateModel} from "../../../store/models/user.model";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements  OnInit{


  public userInfo: userStateModel = {
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

  public status: boolean = false;
  public activeBlock: boolean = false;


  constructor(
    private authService: AuthUserService,
    private store: Store) {
  }


  ngOnInit(): void {
    this.store.select(UserState.getUser).subscribe({
      next:(user:userStateModel)=>{
        this.userInfo = user;
      }
    })
  }


  public toggleActiveBlock = (): void => {
    this.activeBlock = !this.activeBlock;
  }


}

import {Component, ElementRef, HostListener, OnInit, ViewChild} from '@angular/core';
import {AuthUserService} from "../../../services/auth-user.service";
import {Store} from "@ngxs/store";
import {UserState} from "../../../store/store";
import {LogoutUser, userStateModel} from "../../../store/models/user.model";
import {Router} from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements  OnInit{

  @ViewChild('headerBottomBlock') headerBottomBlock!: ElementRef;

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

  public activeBlock: boolean = false;


  constructor(
    private store: Store,private router: Router,) {
  }


  ngOnInit(): void {
    this.store.select(UserState.getUser).subscribe({
      next:(user:userStateModel)=>{
        this.userInfo = user;
      }
    })
  }


  public toggleActiveBlock = (event: Event): void => {
    event.stopPropagation();
    this.activeBlock = !this.activeBlock;
  }
  public  logout() {
    this.store.dispatch(new LogoutUser());
    this.activeBlock = false;
    this.router.navigate(['/']);
  }

  @HostListener('document:click', ['$event'])
  public onClick(event: Event): void {
    if (this.activeBlock && this.headerBottomBlock && !this.headerBottomBlock.nativeElement.contains(event.target)) {
      this.activeBlock = false;
    }
  }

}

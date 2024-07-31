import {Component} from '@angular/core';
import {AuthUserService} from "../../services/auth-user.service";
import {AuthResponseUser, UserRegister} from "../../types/types";
import {Router} from "@angular/router";
import {NotificationService} from "../../services/notification.service";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  constructor(
    private registerService: AuthUserService,
    private router: Router,
    private notificationService: NotificationService
    ) {
  }

  public submitRegister(user: UserRegister): void {
    console.log(user);
    this.registerService.registerUser(user).subscribe({
      next: (value: AuthResponseUser) => {
        this.notificationService.setNotification('Registration Successful', 'You have registered successfully.');
        this.router.navigate(['/']);

      }
    });
  }



}

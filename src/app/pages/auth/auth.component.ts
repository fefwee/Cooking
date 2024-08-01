import {Component} from '@angular/core';
import {AuthUserService} from "../../services/auth-user.service";
import {UserAuth, UserRegister} from "../../types/types";
import {HttpErrorResponse} from "@angular/common/http";
import {NotificationService} from "../../services/notification.service";

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent {

  constructor(private authService: AuthUserService,
              private notificationService: NotificationService) {
  }


  ngOnInit(): void {
  }

  public authSubmit(user: UserAuth) {
    this.authService.authUser(user).subscribe({
      error: (err: HttpErrorResponse) => {
        if (err.status !== 200) {
          this.notificationService.setNotification('Ошибка', 'Неверный логин или пароль');
        }
      }
    })
  }


}

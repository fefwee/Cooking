import {Component} from '@angular/core';
import {UserAuth} from "../../types/types";
import {NotificationService} from "../../services/notification.service";
import {AuthUser} from "../../store/models/user.model";
import {Router} from "@angular/router";
import {Store} from "@ngxs/store";
import {HttpErrorResponse} from "@angular/common/http";

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent {

  constructor(
    private notificationService: NotificationService,
    private router: Router,
    private store: Store) {
  }

  public authSubmit(user: UserAuth) {
    this.store.dispatch(new AuthUser(user)).subscribe({
      next: (val) => {
        this.notificationService.setNotification('Успешно', 'Вы успешно авторизовались', false);
        this.router.navigate(['/']);
      },
      error: (er: HttpErrorResponse) => {
        this.notificationService.setNotification('Ошибка', 'Неверный логин или пароль', true);
      }
    });
  }

}

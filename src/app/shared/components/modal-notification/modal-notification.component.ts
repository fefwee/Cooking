import {Component, EventEmitter, Input, Output} from '@angular/core';
import {GetRecipeService} from "../../../services/get-recipe.service";
import {GetUsersService} from "../../../services/get-users.service";
import {NotificationService} from "../../../services/notification.service";

@Component({
  selector: 'app-modal-notification',
  templateUrl: './modal-notification.component.html',
  styleUrls: ['./modal-notification.component.css']
})
export class ModalNotificationComponent {

  @Input() title!: string;
  @Input() desc!: string;
  @Input() error!: boolean;
  @Input() itemId!: string;
  @Input() userId!: string;
  @Input() shareId!:string;
  @Input() deleteType!: 'recipe' | 'user' | 'share';
  @Output() open = new EventEmitter<boolean>();

  public openWindow: boolean = false;

  constructor(
    private recipeService: GetRecipeService,
    private usersService: GetUsersService,
    private notificationService: NotificationService,
  ) {
  }

  public openModal(): void {
    this.openWindow = true;
    this.open.emit(true)
  }

  public closeModal(): void {
    if (this.openWindow) {
      this.openWindow = false;
      this.open.emit(false);
    }
  }

  public onOverlayClick(): void {
    this.closeModal();
  }

  public deleteItem(): void {
    if (this.itemId) {
      if (this.deleteType === 'recipe') {
        this.recipeService.deleteRecipe(this.itemId).subscribe(
          () => {
            this.notificationService.setNotification('Успешно', 'Вы успешно удалили рецепт', false);
            this.closeModal();
          },
          (error) => {
            console.error('Ошибка удаления рецепта:', error);
          }
        );
      }
    }
    if (this.userId) {
      if (this.deleteType === 'user') {
        this.usersService.deleteUsers(this.userId).subscribe(
          () => {
            this.notificationService.setNotification('Успешно', 'Вы успешно удалили пользователя', false);
            this.closeModal();

          },
          (error) => {
            console.error('Ошибка удаления пользователя:', error);
          }
        );
      }

    }
      if (this.deleteType === 'share') {
        this.notificationService.setNotification('Успешно', 'Вы успешно поделились рецептом', false);
        this.closeModal();
      }
  }

}

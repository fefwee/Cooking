import {Component} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {NotificationService} from "../../../services/notification.service";

@Component({
  selector: 'app-get-new-recipe',
  templateUrl: './get-new-recipe.component.html',
  styleUrls: ['./get-new-recipe.component.css']
})
export class GetNewRecipeComponent {

  public registerForm!: FormGroup;


  constructor(private notificationService:NotificationService) {
  }

  ngOnInit() {
    this.registerForm = new FormGroup({
      email: new FormControl('', [
        Validators.minLength(4),
        Validators.required,
        Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')
      ])
    });
  }



  onSubmit() {
    this.notificationService.setNotification('Готово', 'Теперь вы подписаны на рассылку',false);
  }

}

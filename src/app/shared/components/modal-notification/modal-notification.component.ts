import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-modal-notification',
  templateUrl: './modal-notification.component.html',
  styleUrls: ['./modal-notification.component.css']
})
export class ModalNotificationComponent {

  @Input() title!: string;
  @Input() desc!: string;
  @Output() open = new EventEmitter<boolean>();

  public openWindow:boolean = false;
  constructor() {
  }

  public openModal(): void {
    this.openWindow = true;
    this.open.emit(true)
  }

  public closeModal(): void {
    if (this.openWindow) { // Проверка состояния перед изменением
      this.openWindow = false;
      this.open.emit(false);
    }
  }

  public onOverlayClick(): void {
    this.closeModal();
  }
}

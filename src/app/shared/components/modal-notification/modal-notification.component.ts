import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-modal-notification',
  templateUrl: './modal-notification.component.html',
  styleUrls: ['./modal-notification.component.css']
})
export class ModalNotificationComponent {

  @Input() title!: string;
  @Input() desc!: string;
  @Input() error!:boolean;
  @Output() open = new EventEmitter<boolean>();

  public openWindow:boolean = false;
  constructor() {
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
}

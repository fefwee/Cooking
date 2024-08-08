import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {NotificationService} from "../../../services/notification.service";

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent implements OnInit {
  @ViewChild('close') close!: ElementRef;

  name!: string;
  desc!: string;
  visible: boolean = false;
  public error!: boolean;

  constructor(private notificationService: NotificationService) {
  }

  ngOnInit(): void {
    this.notificationService.notification$.subscribe(notification => {
      if (notification) {

        if (notification.er) {
          this.error = true;
        }
        this.name = notification.name;
        this.desc = notification.desc;
        this.visible = true;
        setTimeout(()=>{this.visible = false},3000)
      } else {
        this.visible = false;
      }
    });
  }

  public closeNitif(): void {
    this.visible = false;

  }


}

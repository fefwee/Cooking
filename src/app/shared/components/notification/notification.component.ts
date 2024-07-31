import {Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import {NotificationService} from "../../../services/notification.service";

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent implements OnInit {
@ViewChild('close') close!:ElementRef;

  name!: string;
  desc!: string;
  visible: boolean = false;
  public error!:boolean;
  constructor(private notificationService: NotificationService) {
  }

  ngOnInit(): void {
    this.notificationService.notification$.subscribe(notification => {
      if (notification) {

        if(notification.name === 'Ошибка'){
          this.error = true;
        }
        this.name = notification.name;
        this.desc = notification.desc;
        this.visible = true;

      }
      else {
        this.visible = false;
      }
    });
  }

  public  closeNitif ():void{
    console.log(this.close)
    this.close.nativeElement.style.right = '-100%';
  }


}

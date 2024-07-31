import {Injectable} from '@angular/core';
import {Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  public notificationSubject = new Subject<{ name: string; desc: string;}>();
  notification$ = this.notificationSubject.asObservable();

  constructor() {
  }

  setNotification(name: string, desc: string): void {
    this.notificationSubject.next({name, desc});
  }
}

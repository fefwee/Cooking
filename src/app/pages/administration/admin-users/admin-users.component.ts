import {Component, ComponentFactoryResolver, ComponentRef, OnInit, ViewChild, ViewContainerRef} from '@angular/core';
import {User} from "../../../types/types";
import {GetUsersService} from "../../../services/get-users.service";
import {Router} from "@angular/router";
import {ModalNotificationComponent} from "../../../shared/components/modal-notification/modal-notification.component";

@Component({
  selector: 'app-admin-users',
  templateUrl: './admin-users.component.html',
  styleUrls: ['./admin-users.component.css']
})
export class AdminUsersComponent implements OnInit {

  @ViewChild('modalContainer', {read: ViewContainerRef, static: true}) modalContainer!: ViewContainerRef;
  modalRef!: ComponentRef<ModalNotificationComponent>;
  public users: User[] = [];


  constructor(
    private getAllUsersService: GetUsersService,
    private router: Router,
    private componentFactoryResolver: ComponentFactoryResolver
  ) {
  }

  ngOnInit(): void {
    this.getAllUsersService.getAllUsers().subscribe({
      next: (user: User[]) => {
        this.users = user;
      }
    })
  }

  public navigateToUser(id: string) {
    console.log(id)
    this.router.navigate([`/admin/users//${id}`])
  };

  public deleteUser(id: string) {
    this.modalContainer.clear();

    const factory = this.componentFactoryResolver.resolveComponentFactory(ModalNotificationComponent);
    this.modalRef = this.modalContainer.createComponent(factory);

    this.modalRef.instance.title = 'Удалить этого пользователя?';
    this.modalRef.instance.desc = 'Вы хотите удалить этого пользователя';
    this.modalRef.instance.error = true;
    this.modalRef.instance.deleteType = 'user';
    this.modalRef.instance.userId = id;
    this.modalRef.instance.open.subscribe((isOpen: boolean) => {
      if (!isOpen) {
        this.modalContainer.clear();
      }
    });

    this.modalRef.instance.openModal();
  }
}

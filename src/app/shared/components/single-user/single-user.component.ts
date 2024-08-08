import {Component, ComponentFactoryResolver, ComponentRef, OnInit, ViewChild, ViewContainerRef} from '@angular/core';
import {SingleUser} from "../../../types/types";
import {GetUsersService} from "../../../services/get-users.service";
import {ActivatedRoute} from "@angular/router";
import {ModalNotificationComponent} from "../modal-notification/modal-notification.component";

@Component({
  selector: 'app-single-user',
  templateUrl: './single-user.component.html',
  styleUrls: ['./single-user.component.css']
})
export class SingleUserComponent implements OnInit {

  @ViewChild('modalContainer', {read: ViewContainerRef, static: true}) modalContainer!: ViewContainerRef;
  modalRef!: ComponentRef<ModalNotificationComponent>;

  public user: SingleUser = {
    avatar: "",
    comments: [{createdOn: "", id: "", postId: "", text: "", updatedOn: ""}],
    createdOn: "",
    firstName: "",
    id: "",
    isActive: true,
    lastEntry: "",
    lastName: "",
    middleName: "",
    posts: [{_count: {comments: 0}, body: "", createdOn: "", id: "", image: "", title: "", updatedOn: ""}],
    role: "",
    updatedOn: "",
    userAgent: "",
    username: ""

  }


  constructor(
    private getsUserService: GetUsersService,
    private route: ActivatedRoute,
    private componentFactoryResolver: ComponentFactoryResolver
  ) {
  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.getsUserService.getSingleUser(id).subscribe({
      next: (val: SingleUser) => {
        this.user = val;
      }
    })
  }


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

import {Component, EventEmitter, Input, Output} from '@angular/core';
import { FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {

  @Input() auth: boolean = false;
  @Input() register: boolean = false;
  @Output() onSubmitAuth = new EventEmitter();
  @Output() onSubmitRegister = new EventEmitter();

  public form!: FormGroup;

  constructor() {
  }

  ngOnInit(): void {
    if (this.auth) {
      this.form = new FormGroup({
        login: new FormControl('', [
          Validators.minLength(4),
          Validators.required,
        ]),
        password: new FormControl('', [
          Validators.required,
          Validators.minLength(5),
        ]),
        fastSession: new FormControl(false)
      });
    }
    if (this.register) {
      this.form = new FormGroup({
        login: new FormControl('', [
          Validators.minLength(3),
          Validators.required,
        ]),
        password: new FormControl('', [
          Validators.required,
          Validators.minLength(4),
        ]),
        name: new FormControl('', [
          Validators.required,
          Validators.minLength(3),
        ]),
        surname: new FormControl('', [
          Validators.required,
          Validators.minLength(3),
        ]),
        secondname: new FormControl('', [
          Validators.required,
          Validators.minLength(3),
        ]),
      });
    }

  }

  public submitAuth(): void {
    this.onSubmitAuth.emit({
      username: this.form.value.login,
      password: this.form.value.password,
      fastSession:this.form.value.fastSession
    })
    this.form.reset()
  }

  public submitRegister(): void {
    this.onSubmitRegister.emit({
      username: this.form.value.login,
      password: this.form.value.password,
      firstName: this.form.value.name,
      lastName: this.form.value.surname,
      middleName: this.form.value.secondname
    })
      this.form.reset()
  }


}

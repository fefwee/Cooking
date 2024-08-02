import {Component, Input, OnInit} from '@angular/core';
import {Comments} from "../../../types/types";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {


  @Input() comments: Comments[] = [];

  public comment!: FormGroup;

  constructor() {
  }

  ngOnInit(): void {
    this.comment = new FormGroup({
        login: new FormControl('', [
          Validators.minLength(3),
          Validators.required,
        ]),
      }
    )
  }
}

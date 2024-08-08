import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {AddComment, Comments} from "../../../types/types";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {CommentService} from "../../../services/comment.service";

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit, OnChanges {


  @Input() comments: Comments[] = [];
  @Input() id: string = '';
  public comment!: FormGroup;

  constructor(private commentService: CommentService) {
  }


  ngOnChanges(changes: SimpleChanges): void {
    if (changes['comments']) {
      const updatedComments = changes['comments'].currentValue;
    }
  }

  ngOnInit(): void {
    this.comment = new FormGroup({
        text: new FormControl('', [
          Validators.minLength(3),
          Validators.required,
        ]),
      }
    )
  }

  public submitComment() {
    const text: AddComment = {
      text: this.comment.value.text
    }
    this.commentService.addComment(this.id, text).subscribe(
      (newComment: any) => {
        this.comment.reset();
      },
    );
  }


}

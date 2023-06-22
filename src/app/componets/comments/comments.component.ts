import {Component, Input, OnInit} from '@angular/core';

import {IComment} from "../../interfaces";
import {CommentService} from "../../services";

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit{
  @Input()
  postId:number;
  comments:IComment[];

  constructor(private commentService:CommentService) {
  }

  ngOnInit(): void {
    this.commentService.getCommentsByPostId(this.postId).subscribe(value => this.comments=value)
  }

}

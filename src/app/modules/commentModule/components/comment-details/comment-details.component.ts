import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

import {IComment} from "../../../../interfaces";
import {CommentService} from "../../../../services";

@Component({
  selector: 'app-comment-details',
  templateUrl: './comment-details.component.html',
  styleUrls: ['./comment-details.component.css']
})
export class CommentDetailsComponent implements OnInit {
  @Input()
  comment: IComment;

  constructor(private commentService: CommentService, private activatedRoute: ActivatedRoute, private router: Router) {
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(({id}) => {
      const state = this.router.getCurrentNavigation()?.extras.state as IComment

      if (!state) {
        this.commentService.getById(id).subscribe(value => this.comment = value)
      } else {
        this.comment = state
      }
    })
  }

}

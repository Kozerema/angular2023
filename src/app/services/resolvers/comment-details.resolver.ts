import {ResolveFn} from '@angular/router';
import {inject} from "@angular/core";

import {IComment, IPost} from "../../interfaces";
import {CommentService} from "../comment.service";
import {PostService} from "../post.service";

export const commentDetailsResolver: ResolveFn<IComment> = (route, state) => {
  const commentService = inject(CommentService)
  const {id} = route.params
  return commentService.getById(id);
};

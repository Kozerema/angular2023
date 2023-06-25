import {ResolveFn} from '@angular/router';

import {IPost} from "../../interfaces";
import {inject} from "@angular/core";
import {PostService} from "../post.service";

export const postDetailsResolver: ResolveFn<IPost> = (route, state) => {
  const postService = inject(PostService)
  const {id} = route.params
  return postService.getById(id);
};

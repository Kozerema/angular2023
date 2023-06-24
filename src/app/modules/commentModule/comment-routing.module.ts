import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {CommentPageComponent} from "./pages/comment-page/comment-page.component";
import {PostDetailsPageComponent} from "../postModule/pages/post-details-page/post-details-page.component";

const routes: Routes = [
  {
    path: '', component: CommentPageComponent, children: [
      {path: ':id', component: PostDetailsPageComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CommentRoutingModule {
}

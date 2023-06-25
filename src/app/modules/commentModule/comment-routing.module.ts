import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {CommentPageComponent} from "./pages/comment-page/comment-page.component";
import {commentDetailsResolver} from "../../services/resolves/comment-details.resolver";
import {CommentDetailsPageComponent} from "./pages/comment-details-page/comment-details-page.component";

const routes: Routes = [
  {
    path: '', component: CommentPageComponent, children: [
      {path: ':id', component: CommentDetailsPageComponent, resolve:{commentData:commentDetailsResolver}}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CommentRoutingModule {
}

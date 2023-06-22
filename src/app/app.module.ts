import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './componets/app.component';
import { PostComponent } from './componets/post/post.component';
import { PostsComponent } from './componets/posts/posts.component';
import { PostDetailsComponent } from './componets/post-details/post-details.component';
import { CommentComponent } from './componets/comment/comment.component';
import { CommentsComponent } from './componets/comments/comments.component';
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    PostComponent,
    PostsComponent,
    PostDetailsComponent,
    CommentComponent,
    CommentsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

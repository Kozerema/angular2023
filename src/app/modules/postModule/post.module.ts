import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {PostRoutingModule} from './post-routing.module';
import {PostPageComponent} from './pages/post-page/post-page.component';
import {PostDetailsPageComponent} from './pages/post-details-page/post-details-page.component';
import {PostsComponent} from './components/posts/posts.component';
import {PostDetailsComponent} from './components/post-details/post-details.component';
import {PostComponent} from './components/post/post.component';


@NgModule({
  declarations: [
    PostPageComponent,
    PostDetailsPageComponent,
    PostsComponent,
    PostDetailsComponent,
    PostComponent
  ],
  exports: [
    PostDetailsComponent
  ],
  imports: [
    CommonModule,
    PostRoutingModule
  ]
})
export class PostModule {
}

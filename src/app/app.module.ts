import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './componets/app.component';
import { UsersComponent } from './componets/users/users.component';
import {HttpClientModule} from "@angular/common/http";
import { UserDetailsComponent } from './componets/user-details/user-details.component';
import { PostComponent } from './componets/post/post.component';
import { PostsComponent } from './componets/posts/posts.component';
import {UserComponent} from "./componets/user/user.component";

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    UserComponent,
    UserDetailsComponent,
    PostComponent,
    PostsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

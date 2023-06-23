import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './componets/app.component';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';
import { PostPageComponent } from './pages/post-page/post-page.component';
import { UserPageComponent } from './pages/user-page/user-page.component';
import { UserDetailsPageComponent } from './pages/user-details-page/user-details-page.component';
import {HttpClientModule} from "@angular/common/http";
import {RouterModule, Routes} from "@angular/router";
import { HeaderComponent } from './componets/header/header.component';
import { UsersComponent } from './componets/users/users/users.component';
import { UserDetailsComponent } from './componets/users/user-details/user-details.component';
import { UserComponent } from './componets/users/user/user.component';

const routes: Routes = [
  {
    path: '', component: MainLayoutComponent, children: [
      {path: '', redirectTo: 'users', pathMatch: 'full'},
      {
        path: 'users', component: UserPageComponent, children: [
          {path: ':id', component: UserDetailsPageComponent}
        ]
      },
      {path: 'posts', component: PostPageComponent}
    ]
  }
]

@NgModule({
  declarations: [
    AppComponent,
    MainLayoutComponent,
    PostPageComponent,
    UserPageComponent,
    UserDetailsPageComponent,
    HeaderComponent,
    UsersComponent,
    UserDetailsComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

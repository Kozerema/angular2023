import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatDialogModule} from "@angular/material/dialog";
import {MatToolbarModule} from "@angular/material/toolbar";
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {HeaderComponent} from './layouts/main-layout/header/header.component';
import {MainLayoutComponent} from './layouts/main-layout/main-layout.component';
import {AppRoutingModule} from "./app-routing.module";
import {AppComponent} from './app.component';
import {MainInterceptor} from "./main.interceptor";


@NgModule({
  declarations: [
    AppComponent,
    MainLayoutComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatDialogModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      multi: true,
      useClass: MainInterceptor
    }
  ],
  bootstrap: [AppComponent]
})

export class AppModule {
}

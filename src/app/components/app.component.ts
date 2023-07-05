import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  num=150;
  flag=false;

  inc(){
    this.num+=100
  }
}

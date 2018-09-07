import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  username = '';

  // onCreateUserName(event: Event){
  //   this.username=(<HTMLInputElement>event.target).value
  // }

  onReset(){
    this.username = '';
  }
}

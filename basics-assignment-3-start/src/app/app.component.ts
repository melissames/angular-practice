import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  buttonClicked = false;
  log = [];

  onButtonClick() {
    buttonClicked = !buttonClicked;
    this.log.push(new Date())
  }
}

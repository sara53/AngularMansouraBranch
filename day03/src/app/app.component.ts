import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'day03';

  test: string = '';
  appComponentData: string = 'Mearn Track From Parent Component';
  getData(x: any) {
    this.test = x;
  }
}

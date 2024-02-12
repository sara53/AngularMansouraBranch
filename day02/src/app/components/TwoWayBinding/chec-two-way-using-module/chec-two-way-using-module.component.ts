import { Component } from '@angular/core';

@Component({
  selector: 'app-chec-two-way-using-module',
  templateUrl: './chec-two-way-using-module.component.html',
  styleUrls: ['./chec-two-way-using-module.component.css'],
})
export class ChecTwoWayUsingModuleComponent {
  inputValue: string = '';

  selectValue: string = '';

  show() {
    console.log(this.inputValue);
  }
}

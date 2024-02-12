import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-chec-two-way-normal',
  templateUrl: './chec-two-way-normal.component.html',
  styleUrls: ['./chec-two-way-normal.component.css'],
})
export class ChecTwoWayNormalComponent {
  @ViewChild('myElement') testVar: any;

  inputValue: string = '';
  componentData: string = 'Mansoura Branch';

  getInputValue(e: any) {
    this.inputValue = e.target.value;
  }

  changeValue() {
    this.componentData = 'Welcome From ITI ';
  }
  execute(x: any) {
    // local inside execute
    console.log('From Execute');
    // this.myElement = x;
  }

  show() {
    console.log(this.testVar.nativeElement);
    // console.log(this.myElement.textContent);
  }
}

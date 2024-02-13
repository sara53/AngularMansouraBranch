import { Component } from '@angular/core';

@Component({
  selector: 'app-check-attribute-dir',
  templateUrl: './check-attribute-dir.component.html',
  styleUrls: ['./check-attribute-dir.component.css'],
})
export class CheckAttributeDirComponent {
  flag: boolean = false;

  toggle() {
    this.flag = !this.flag;
  }
}

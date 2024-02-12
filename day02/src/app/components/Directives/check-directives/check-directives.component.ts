import { Component } from '@angular/core';

@Component({
  selector: 'app-check-directives',
  templateUrl: './check-directives.component.html',
  styleUrls: ['./check-directives.component.css'],
})
export class CheckDirectivesComponent {
  flag: boolean = false;
  color: string = 'green';

  names: string[] = ['mona', 'ali', 'ahmed', 'hoda'];
  toggle() {
    this.flag = !this.flag;
    console.log(this.flag);
  }
}

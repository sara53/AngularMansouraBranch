import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnChanges {
  ngOnChanges(changes: SimpleChanges): void {
    console.log('changes', changes);
  }
  @Input() myLoginVar: string = '';

  @Input() containerData: string = '';
  title: string = 'dd';
}

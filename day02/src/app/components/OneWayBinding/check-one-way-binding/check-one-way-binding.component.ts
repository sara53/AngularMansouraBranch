import { Component } from '@angular/core';

@Component({
  selector: 'app-check-one-way-binding',
  templateUrl: './check-one-way-binding.component.html',
  styleUrls: ['./check-one-way-binding.component.css'],
})
export class CheckOneWayBindingComponent {
  componentTitle: string = 'Our Products';
  flag: boolean = false;
  imgSrc1: string = '2.jpg';
  imgSrc2: string = 'assets/imgs/3.jpg';
}

import {
  Component,
  EventEmitter,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css'],
})
export class ContentComponent implements OnInit, OnDestroy {
  contentData: string = 'My Content Data';
  @Output() myEvent = new EventEmitter();
  constructor() {
    console.log('1-ctor');
  }
  ngOnDestroy(): void {
    console.log('Destory');
  }
  ngOnInit(): void {
    this.myEvent.emit(this.contentData);
  }
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css'],
})
export class TodosComponent {
  inputValue: string = '';
  todosList: string[] = [];
  add() {
    this.todosList.push(this.inputValue);
    console.log(this.todosList);
    this.inputValue = '';
  }
}

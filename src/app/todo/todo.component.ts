import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  tasks: String[] = [];

  constructor() {
    this.tasks.push('Estudar');
    this.tasks.push('Correr');
    this.tasks.push('Aula do IGTI');
    this.tasks.push('Horário livre');
  }
  addTask(newTask){
    this.tasks.push(newTask);
  }

  ngOnInit(): void {
  }

}

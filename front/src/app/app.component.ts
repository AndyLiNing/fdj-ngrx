import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'front';
}
interface Person {
  name?: string;
  age: string;
  gender?: string;
  occupation?: string;
}

function getPerson() {
  const person = { age: 'age' };
  return person;
}
const persons: Person = getPerson();
const name1: string = persons.name;

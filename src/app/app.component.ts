import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Hello world';
  showForm = false;
  name = '';
  country = '';
  students = [{
    name: 'Andrea',
    country: 'Spain'
  }, {
    name: 'Gabriel',
    country: 'Colombia'
    }, {
    name: 'Daniela',
    country: 'Venezuela'
  }];

  handleAddClick() {
    this.students.push({
      name: this.name,
      country: this.country
    });
    this.name = '';
    this.country = '';
    this.showForm = false;
  }

  handleRemoveClick(index) {
    this.students.splice(index, 1);
  }
}

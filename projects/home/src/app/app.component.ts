import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'home-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'home';
  allNames = [
    { name: 'Pedro', description: 'Nuevo jefe' },
    { name: 'Mayko', description: 'El que sabe' },
    { name: 'Limari', description: 'Nose Que poner' }
  ];
  filteredNames: any;

  ngOnInit(): void {
    this.filteredNames = this.allNames;
  }

  filterList(filtedList) {
    this.filteredNames = filtedList;
  }

  clearSearch() {
    this.filteredNames = this.allNames;
  }
}

import { Component, OnInit, Input, Output } from '@angular/core';
import { Subject, interval } from 'rxjs';


@Component({
  selector: 'home-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  openModal = new Subject<string>();
  deleteItem = new Subject<any>();
  hideModal = new Subject<any>();

  title = 'home';
  allNames = [
    { name: 'Pedro', description: 'Nuevo jefe' },
    { name: 'Mayko', description: 'El que sabe' },
    { name: 'Limari', description: 'Nose Que poner' }
  ];
  filteredNames: any;

  openDeleteModal() {
    this.openModal.next('Delete Mayko Item');
  }


  ngOnInit(): void {
    this.deleteItem.subscribe(() => {
      setTimeout(() => {
        this.hideModal.next();
      }, 1000);
    });
    this.filteredNames = this.allNames;
  }

  filterList(filtedList) {
    this.filteredNames = filtedList;
  }

  clearSearch() {
    this.filteredNames = this.allNames;
  }
}

import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'ok-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {

  @Input() fieldTosearch = 'description';

  @Output() searchEvent = new EventEmitter<any>();
  @Output() clearSearchEvent = new EventEmitter<any>();

  public search: string | null;
  public filtered: any = [];

  @Input() list;

  public changeIcon(param, icon) {
    const element = document.getElementById(param);
    element.innerText = icon;
    if (this.search === '' && param === 'search-icon') {
      element.innerText = 'search';
    }
  }

  public clearSearch() {
    this.setToFullList();
    this.search = null;
    this.clearSearchEvent.emit();
  }

  public sortByName() {
    this.filtered = [].concat(this.filtered || []).sort((a, b) => -(a.description < b.description) || +(a.description !== b.description));
  }

  public filter() {

    if (this.search === '') {

      this.setToFullList();

    } else {

      this.filtered = this.list
        .filter(item => item[this.fieldTosearch].toLowerCase()
          .indexOf(this.search.toLowerCase()) !== -1);

      this.searchEvent.emit(this.filtered);
    }

  }

  public setToFullList() {
    this.filtered = this.list || [];
    this.clearSearchEvent.emit();
  }
}

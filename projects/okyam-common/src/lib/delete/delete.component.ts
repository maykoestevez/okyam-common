import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Subject } from 'rxjs';
import { NzModalRef, NzModalService } from 'ng-zorro-antd/modal';

@Component({
  selector: 'ok-delete',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class DeleteComponent {


  //ng zorro confirm modal
  confirmModal: NzModalRef; // For testing by now

  constructor(private modal: NzModalService) { }

  showConfirm(itemToDelete: string): void {
    this.confirmModal = this.modal.confirm({
      nzTitle: 'Eliminar',
      nzContent: `Quieres eliminar ${itemToDelete}?`,
      nzOnOk: () =>
        new Promise((resolve, reject) => {
          resolve(() => {

            this.deleteItem.next();
            this.deleteItem.subscribe(() => {

            })

          }),
            reject(() => {

            });
          //setTimeout(Math.random() > 0.5 ? resolve : reject, 1000);
        }).catch(() => console.log('Oops errors!'))
    });
  }

  name: string;
  @Input() modalId: string;
  @Input() openModal: Subject<string>;
  @Output() deleteItem = new Subject<any>();
  @Output() closeModal = new EventEmitter<any>();

  public ngOnInit() {


    this.openModal.subscribe(event => {
      this.showConfirm(event);
    });

  }

  public hideModal() {
    this.confirmModal.close();
  }
  public delete() {

    //this.deleteItem.emit();
    this.hideModal();
  }

  public close() {
    this.hideModal();
    this.closeModal.emit();
  }

}

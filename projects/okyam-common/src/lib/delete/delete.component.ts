import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Subject } from 'rxjs';
import { NzModalRef, NzModalService } from 'ng-zorro-antd/modal';

@Component({
  selector: 'ok-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {

  confirmModal: NzModalRef;
  @Input() openModal = new Subject<string>();
  @Input() deleteAction = new Subject<any>();
  @Input() closeModal = new Subject<any>();

  constructor(private modal: NzModalService) { }

  public ngOnInit() {
    this.openModal.subscribe(event => this.showConfirm(event));
    this.closeModal.subscribe(() => this.hideModal());
  }

  showConfirm(itemToDelete: string): void {
    this.confirmModal = this.modal.confirm({
      nzTitle: 'Eliminar',
      nzContent: `Quieres eliminar ${itemToDelete}?`,
      nzOnOk: () => {
        this.deleteAction.next();
        this.confirmModal.getInstance().nzOkLoading = true;
        return false;
      }
    });
  }

  public hideModal() {
    this.confirmModal.getInstance().nzOkLoading = false;
    this.confirmModal.close();
  }
}

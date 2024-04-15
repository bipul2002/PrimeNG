import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DialogService {
  private showDialogSubject = new BehaviorSubject<boolean>(false);
  showDialog$ = this.showDialogSubject.asObservable();

  constructor() { }

  showDialog() {
    this.showDialogSubject.next(true);
  }

  hideDialog() {
    this.showDialogSubject.next(false);
  }
}

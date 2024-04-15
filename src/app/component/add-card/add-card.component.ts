import { Component, OnInit } from '@angular/core';
import { DialogService } from 'src/app/service/dialog/dialog.service';

@Component({
  selector: 'app-add-card',
  templateUrl: './add-card.component.html',
  styleUrls: ['./add-card.component.css']
})
export class AddCardComponent{

  constructor(private dialog:DialogService){}

 
  displayDialog: boolean = false;
  newCard: any = { header: '', subheader: '', imageUrl: '', content: '' };

  showDialog() {
    this.displayDialog = true;
  }

  hideDialog() {
    this.displayDialog = false;
  }

  addCard(){

  }


}

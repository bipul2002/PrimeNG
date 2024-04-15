import { Component } from '@angular/core';
import { cardData } from 'src/app/data/card';


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {

  cardData = cardData;
  dropdownOptions = [4,5, 8, 12, 16]; 
  selectedOption = 4; 
  displayedCardData: any[]; 
  
  constructor(){
    this.displayedCardData = this.cardData.slice(0, this.selectedOption);
  }

  updateCardCount() {
    this.displayedCardData = this.cardData.slice(0, this.selectedOption);
  }

  showAddCardDialog(){
    console.log('testing');
    
    

  }

}

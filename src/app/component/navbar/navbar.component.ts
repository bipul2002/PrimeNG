import { Component } from '@angular/core';
import { DialogService } from 'src/app/service/dialog/dialog.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  menuItems: any[];

  constructor(private dialog:DialogService) {
    this.menuItems = [
      { label: 'Home', icon: 'pi pi-footer', routerLink: '/footer' },
      { label: 'Services', icon: 'pi pi-footer', routerLink: '/footer' },
      { label: 'Contact', icon: 'pi pi-footer', routerLink: '/footer' },
      { label: 'About', icon: 'pi pi-footer', routerLink: '/footer' },
      
    ];
  }

 
}

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonModule } from 'primeng/button';
import { NavbarComponent } from './component/navbar/navbar.component';

import { MenuModule } from 'primeng/menu';
import { MenubarModule } from 'primeng/menubar';
import { InputTextModule } from 'primeng/inputtext';
import { CardComponent } from './component/card/card.component';
import { CardModule, } from 'primeng/card';
import { AddCardComponent } from './component/add-card/add-card.component'; 
import { DialogModule } from 'primeng/dialog';
import { FormsModule } from '@angular/forms';
import { DropdownModule } from 'primeng/dropdown';

import { DashboardComponent } from './component/dashboard/dashboard.component';
import { TableModule } from 'primeng/table';
import { ChartModule } from 'primeng/chart';
import { AccordionModule } from 'primeng/accordion';
import { BadgeModule } from 'primeng/badge';
import { AvatarModule } from 'primeng/avatar';







@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    
    CardComponent,
    AddCardComponent,

    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ButtonModule,
    BrowserAnimationsModule,
    MenuModule,
    MenubarModule,
    InputTextModule,
    CardModule,
    DialogModule,
    FormsModule,
    DropdownModule,
    TableModule,
    ChartModule,
    AccordionModule,
    BadgeModule,
    AvatarModule
    
    
  ],
  providers: [
    DialogModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

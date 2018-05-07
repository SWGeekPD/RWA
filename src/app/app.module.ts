import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { RWAComponent } from './RWA/rwa.component';
import { UserItemComponent } from './user-item/user-item.component';
import { UserListComponent } from './user-list/user-list.component';
import { AgGridModule } from 'ag-grid-angular/main';

@NgModule({
  declarations: [
    AppComponent,
    RWAComponent,
    UserItemComponent,
    UserListComponent
  ],
  imports: [
    BrowserModule,
    AgGridModule.withComponents(RWAComponent),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

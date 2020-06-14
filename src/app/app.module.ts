import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { reducers } from '../store';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AssetsCardComponent } from './assets-card/assets-card.component';
import { DropDownComponent } from './drop-down/drop-down.component';

import { DropDownService } from './service/drop-down/drop-down.service';

// import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
// import { InMemorySelectDateDbService } from '../data/select-data/select-data-date';
// import { InMemorySelectAccountDbService } from '../data/select-data/select-data-account';


@NgModule({
  declarations: [
    AppComponent,
    AssetsCardComponent,
    DropDownComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    StoreModule.forRoot(reducers, {}),
    HttpModule,
    // InMemoryWebApiModule.forRoot(InMemorySelectDateDbService),
    // InMemoryWebApiModule.forRoot(InMemorySelectAccountDbService),
  ],
  providers: [
    {provide: 'drop-down',  useClass: DropDownService}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

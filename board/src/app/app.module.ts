import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { AppComponent } from './app.component';


import { RowCssComponent } from './board-ts/css.component';


@NgModule({
  declarations: [
    AppComponent, 
    RowCssComponent,
    
  ],
  imports: [
  
    BrowserModule,

    NgxDatatableModule.forRoot({
      messages: {
        emptyMessage: 'No data to display', // Message to show when array is presented, but contains no values
        totalMessage: 'total', // Footer total message
        selectedMessage: 'selected' // Footer selected message
      }
    })
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
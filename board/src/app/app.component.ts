import { Component, ViewEncapsulation } from '@angular/core';
import { LocationStrategy, HashLocationStrategy, Location } from '@angular/common';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  encapsulation: ViewEncapsulation.None,

  
  providers: [
    Location,
    {
      provide: LocationStrategy,
      useClass: HashLocationStrategy
    }
  ]
})
export class AppComponent {
  state: any;
 title="board";


  constructor(location: Location) {
    this.state = location.path(true);
  }
}
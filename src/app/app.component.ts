//file is a central file in an Angular application that defines the main component, its behavior, and its dependencies.
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular Bootcamp';
  getValues(val: string)
  {
    console.warn(val)
  }
  
  /* getName(name: string)
  {
    alert(name)
  } */
}

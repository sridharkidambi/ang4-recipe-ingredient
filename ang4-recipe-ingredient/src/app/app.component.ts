import { Component } from '@angular/core';
import {HeaderComponent } from './header/header.component'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  loadedFeature:String='Weather';
  title:string = 'Sridhar Kidambi I am default in app component';

  onNavigate(name:string){
   this.loadedFeature=name;
  }
}

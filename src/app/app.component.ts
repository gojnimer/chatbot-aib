import { SecurityService } from './security/services/security.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  canShow:boolean;

  constructor(private sec:SecurityService){
   
    this.sec.LoggedIn.subscribe(value => this.canShow = value);
  }
  ngOnInit(){
    
  }
}

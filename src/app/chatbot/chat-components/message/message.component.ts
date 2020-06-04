import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {

  @Input() ctx:any;
  
  constructor() { }

  ngOnInit(): void {
 
  }

  returnData(date): Date{
    return new Date(date);
  }

}

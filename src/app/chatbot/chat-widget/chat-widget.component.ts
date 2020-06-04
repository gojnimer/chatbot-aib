import { MainBotService } from './../services/main-bot.service';
import { Component, OnInit, ViewChild, ElementRef, ViewChildren, QueryList, AfterViewInit } from '@angular/core';
import { discardPeriodicTasks } from '@angular/core/testing';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-chat-widget',
  templateUrl: './chat-widget.component.html',
  styleUrls: ['./chat-widget.component.css']
})
export class ChatWidgetComponent implements OnInit {

  constructor(private bot:MainBotService) { }

  ngOnInit(): void {
  }

  @ViewChild("messageContainer") messageContainer: ElementRef;



  disableScrollDown = false

  messages:any[] = [
    
  ]

  faCoffee = faPaperPlane;

  inputMsg:string;

  submit(){
    
    if(!this.inputMsg){
      return;
    }
    
    let m = {msg:this.inputMsg,user:"reciever",data:Date.now()}
    
    this.messages.push(m);
    
    this.messageContainer.nativeElement.scrollTop = this.messageContainer.nativeElement.scrollHeight;
    
    this.bot.talk(this.inputMsg).subscribe((res:any) => {
  
      console.log(res);
      this.messages.push({user:"sender",msg:res.result.fulfillment.speech,data:new Date(res.timestamp)});
      setTimeout(()=>{ this.messageContainer.nativeElement.scrollTop = this.messageContainer.nativeElement.scrollHeight; },1) 

    },error => console.log(error))

    this.inputMsg = "";
  }

  


  

  
}

import { HttpClientModule } from '@angular/common/http';
import { MainBotService } from './services/main-bot.service';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatWidgetComponent } from './chat-widget/chat-widget.component';

import { MessageComponent } from './chat-components/message/message.component';



@NgModule({
  declarations: [ChatWidgetComponent, MessageComponent],
  imports: [
    CommonModule,
    FormsModule ,
    FontAwesomeModule,
    HttpClientModule
  ],
  exports:[ChatWidgetComponent],
  providers:[MainBotService]
})
export class ChatbotModule { }

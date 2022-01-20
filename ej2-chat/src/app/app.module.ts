import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ChatContainerComponent } from './chat-container/chat-container.component';
import { ChatMsgComponent } from './chat-msg/chat-msg.component';

@NgModule({
  declarations: [
    AppComponent,
    ChatContainerComponent,
    ChatMsgComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

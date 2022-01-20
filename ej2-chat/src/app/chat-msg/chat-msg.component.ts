import { Component, Input, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-chat-msg',
  templateUrl: './chat-msg.component.html',
  styleUrls: ['./chat-msg.component.css']
})
export class ChatMsgComponent implements OnInit {
  
  @Input() msg:any
  @Output() voteEvent = new EventEmitter<number>()

  constructor() { }

  ngOnInit(): void {
  }
  
  voteUp() {
    this.voteEvent.emit(this.msg.id)
  }

}

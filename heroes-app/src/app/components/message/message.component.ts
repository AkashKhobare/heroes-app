import { Component, OnInit } from '@angular/core';
import { Message } from 'src/app/models/message';
import { MessageService } from 'src/app/services/message.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {

  messages?: Message[];

  constructor(private _messageService: MessageService) { }

  ngOnInit() { 
    this._messageService.get().subscribe(messages => this.messages = messages);
  }

  clearMessages() {
    this._messageService.clear();
  }

}

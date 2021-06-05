import { Injectable } from '@angular/core';
import { Message } from '../models/message';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  
  messages: Observable<Message[]> = of([]);

  constructor() { }

  add(message: Message) {
    this.messages.subscribe(messages => {
      messages.push(message);
    })
  }

  get() {
    return this.messages;
  }

  clear() {
    this.messages = of([]);
  }

}

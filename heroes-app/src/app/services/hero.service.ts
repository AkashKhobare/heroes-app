import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { MockHeroes } from '../data/mock-heroes';
import { Hero } from '../models/hero';
import { MessageTypes } from '../models/message';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private _messageService: MessageService) { }

  getHeroes(): Observable<Hero[]> {
    const heroes = of(MockHeroes);
    this._messageService.add({
      type: MessageTypes.Info,
      value: 'Heroes fetched successfully!',
      time: new Date()
    });
    return heroes;
  }
}

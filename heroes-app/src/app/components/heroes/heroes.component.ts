import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { MockHeroes } from 'src/app/data/mock-heroes';
import { Hero } from 'src/app/models/hero';
import { MessageTypes } from 'src/app/models/message';
import { HeroService } from 'src/app/services/hero.service';
import { MessageService } from 'src/app/services/message.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  selectedHero?: Hero;

  heroes: Observable<Hero[]>;

  constructor(private _heroService: HeroService, 
    private _messageMessage: MessageService) { }

  ngOnInit() {
    this.heroes = this._heroService.getHeroes();
  }

  onSelect(selectedHero: Hero) {
    this.selectedHero = selectedHero;
    this._messageMessage.add({
      type: MessageTypes.Info,
      value: `Selected Hero id=${selectedHero.id}`,
      time: new Date()
    });
  }

}

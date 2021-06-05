import { Component, OnInit } from '@angular/core';
import { MockHeroes } from 'src/app/data/mock-heroes';
import { Hero } from 'src/app/models/hero';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  selectedHero?: Hero;

  heroes = MockHeroes;

  constructor() { }

  ngOnInit() {
  }

  onSelect(selectedHero: Hero) {
    this.selectedHero = selectedHero;
  }

}

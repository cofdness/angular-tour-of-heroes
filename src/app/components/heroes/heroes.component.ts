import { Component, OnInit } from '@angular/core';
import {HeroService} from "../../services/hero.service"
import {Hero} from '../../class/hero'
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  constructor(private heroService: HeroService) {

  }
  selectedHero: Hero
  heroes: Hero[]
  ngOnInit() {
    this.getHeroes()
  }
  getHeroes(): void {
    this.heroService.getHeroes().subscribe(heroes => this.heroes = heroes)
  }
  onSelect(hero: Hero): void {
    this.selectedHero = hero
  }
}

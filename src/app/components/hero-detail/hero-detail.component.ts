import { Component, OnInit } from '@angular/core';
import {Hero} from '../../class/hero'
import {ActivatedRoute} from "@angular/router"
import {Location} from "@angular/common"
import {HeroService} from "../../services/hero.service"

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {
  hero: Hero
  constructor(
    private activateRoute: ActivatedRoute,
    private heroService: HeroService,
    private location: Location
  ) { }

  ngOnInit() {
    this.getHero()
  }
  getHero(): void {
    //take id convert to number, id here is number. In normal case, id is string
    const id = +this.activateRoute.snapshot.paramMap.get('id')
    this.heroService.getHero(id)
      .subscribe(hero => this.hero = hero)
  }
  goBack(){
    this.location.back()
  }
  save(): void {
    this.heroService.updateHero(this.hero)
      .subscribe(() => this.goBack());
  }

}

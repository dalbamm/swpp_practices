import { Component, OnInit } from '@angular/core';
import {HEROES} from '../mock-heroes';
import {Hero} from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
/*	hero: Hero = {
		id: 1,
		name: 'Windstrom'
		};*/
heroes = HEROES;
  constructor(private heroService: HeroService) { }
  ngOnInit() {
  	this.getHeroes();
  }
  	selectedHero: Hero;
	onSelect(hero: Hero): void {
		this.selectedHero = hero;	
	}
	getHeroes(): void {
		this.heroService.getHeroes().subscribe(heroes => this.heroes = heroes);
//<!--		this.heroes = this.heroService.getHeroes();-->
	}
}

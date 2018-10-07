import { Injectable } from '@angular/core';
import { MessageService } from './message.service';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import { Observable, of } from 'rxjs' ;
import { delay, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private messageService: MessageService ) { }

  /*getHeroes(): Observable<Hero[]> { this.messageService.add('HeroService: fetched heroes');
  	return of(HEROES).pipe(delay(1000), 
			map((heroes: Hero[]) =>
				heroes.map((hero:Hero)=>({...hero, initial: false}) ) ),
			);
  }*/
 getHeroes(): Observable<Hero> { 
	 this.messageService.add('HeroService: fetched hero id=${id}');
	 return of(HEROES.find(hero => hero.id === id));
  }

/*
	getHeroes(): Promise<Hero[]> {
		return new Promise((resolve, reject) => {
				if(condition) {
					resolve(this.getHeroes())
				} else{
					reject('ERROR MSG')
				}
			});
	
	getHeroes().then(heroes => {
				This.heroes = heroes;
			}).catch(err => console.log(err));
	}*/
}

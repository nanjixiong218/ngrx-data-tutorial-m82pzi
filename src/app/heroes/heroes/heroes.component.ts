import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Hero } from '../../core';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {
  selected: Hero;
  heroes$: Observable<Hero[]>;
  loading: boolean;

  constructor(private heroService: HeroService) {
    this.heroes$ = heroService.entities$;
  } 

  ngOnInit() {
    this.getHeroes();
  }

  add(hero: Hero) {
    this.heroService.add(hero);
  }

  delete(hero: Hero) {
    this.heroService.delete(hero);
    this.close();
  }

  getHeroes() {
    this.heroService.getAll();
    this.close();
  }

  update(hero: Hero) {
    this.heroService.update(hero);
  }

  close() {
    this.selected = null;
  }

  enableAddMode() {
    this.selected = <any>{};
  }

  select(hero: Hero) {
    this.selected = hero;
  }

}

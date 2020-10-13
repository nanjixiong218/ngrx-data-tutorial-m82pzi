import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { Villain, Hero } from '../../core';
import { VillainService } from '../villain.service';
import { HeroService } from '../../heroes/hero.service';

@Component({
  selector: 'app-villains',
  templateUrl: './villains.component.html',
  styleUrls: ['./villains.component.scss']
})
export class VillainsComponent implements OnInit {
  selected: Villain;
  villains$: Observable<Villain[]>;
  heroes$: Observable<Hero[]>;

  loading: boolean;

  constructor(
    private villainService: VillainService,
    private heroService: HeroService) {
    this.villains$ = villainService.entities$;
    this.villains$ = villainService.entities$;

  }

  ngOnInit() {
    this.getVillains();
  }
  
  add(villain: Villain) {
    this.villainService.add(villain);
  }

  delete(villain: Villain) {
    this.villainService.delete(villain);
    this.close();
  }

  getVillains() {
    this.villainService.getAll();
    this.close();
  }

  update(villain: Villain) {
    this.villainService.update(villain);
  }

  // add(villain: Villain) {
  //   this.loading = true;
  //   this.villainService
  //     .add(villain)
  //     .pipe(finalize(() => (this.loading = false)))
  //     .subscribe(
  //       addedvillain => (this.villains = this.villains.concat(addedvillain))
  //     );
  // }

  close() {
    this.selected = null;
  }

  // delete(villain: Villain) {
  //   this.loading = true;
  //   this.close();
  //   this.villainService
  //     .delete(villain)
  //     .pipe(finalize(() => (this.loading = false)))
  //     .subscribe(
  //       () => (this.villains = this.villains.filter(h => h.id !== villain.id))
  //     );
  // }

  enableAddMode() {
    this.selected = <any>{};
  }

  // getVillains() {
  //   this.loading = true;
  //   this.villainService
  //     .getAll()
  //     .pipe(finalize(() => (this.loading = false)))
  //     .subscribe(villains => (this.villains = villains));
  //   this.close();
  // }

  select(villain: Villain) {
    this.selected = villain;
  }

  // update(villain: Villain) {
  //   this.loading = true;
  //   this.villainService
  //     .update(villain)
  //     .pipe(finalize(() => (this.loading = false)))
  //     .subscribe(
  //       () =>
  //         (this.villains = this.villains.map(
  //           h => (h.id === villain.id ? villain : h)
  //         ))
  //     );
  // }
}

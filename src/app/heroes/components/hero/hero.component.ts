import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss'],
})
export class HeroComponent {
  public name: string = 'Ironman';
  public age: number = 45;

  get capitalizedName(): string {
    return this.name.toUpperCase();
  }

  getHeroDescription = (): string => `${this.name} - ${this.age}`;

  changeHero = (): string => {
    let newName = 'Spider-Man';
    return (this.name = newName);
  };

  changeAge = (): number => {
    let newAge = 55;
    return (this.age = newAge);
  };
}

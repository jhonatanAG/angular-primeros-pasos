import { Component } from '@angular/core';

@Component({
  selector: 'app-heros-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {
  public name: string = 'IronMan';
  public age: number = 23;
  public btnPressed: boolean = false;

  get capitalizeName(): string {
    return this.name.toUpperCase();
  }

  getHeroDescription(): string {
    return `${this.name} - ${this.age}`;
  }

  changeName(): void {
    this.name = 'Spiderman';
    this.btnPressed = true;
  }

  changeAge(): void {
    this.age = 22;
    this.btnPressed = true;
  }

  resetValues(): void {
    this.name = 'IronMan';
    this.age = 23;
    this.btnPressed = false;
  }
}

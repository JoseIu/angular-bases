import { Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-add-character',
  templateUrl: './add-character.component.html',
  styleUrls: ['./add-character.component.scss'],
})
export class AddCharacterComponent {
  @Output()
  public onNewCharacter: EventEmitter<Character> = new EventEmitter();
  public character: Character = {
    name: '',
    power: 0,
  };

  public emitCharacter(): void {
    const { name, power } = this.character;
    if (name.length === 0 || !power)
      return console.log('el campo no puede ir vacio');

    this.onNewCharacter.emit(this.character);
    console.log(this.character);
  }
}

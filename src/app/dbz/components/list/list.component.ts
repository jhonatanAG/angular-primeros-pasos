import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  @Input({ required: true }) public characterList: Character[] = [];
  @Output() onDeleteId: EventEmitter<string> = new EventEmitter();

  onDeleteCharacter(id?: string): void {
    //TODO emitir el id del personaje
    if(!id) return;
    this.onDeleteId.emit(id);
  }
}

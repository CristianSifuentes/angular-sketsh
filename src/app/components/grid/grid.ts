import { CommonModule, NgFor, JsonPipe, NgIf, NgSwitch, NgSwitchCase, NgSwitchDefault } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-grid',
  imports: [NgFor, JsonPipe, NgIf, NgSwitch, NgSwitchCase, NgSwitchDefault],
  templateUrl: './grid.html',
  styleUrl: './grid.scss',
})
export class Grid {

  public concepts = [
    'Signals', 
    'Control Flow', 
    'Standalone', 
    'CSS Grid', 
    'Flex Box', 
    'Change Detection'];

    public person = {
      name: 'Nico',
      lastName: 'Stan',
      age: 20
    };


}

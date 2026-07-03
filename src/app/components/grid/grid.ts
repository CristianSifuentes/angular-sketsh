import { CommonModule, NgFor, JsonPipe, NgIf } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-grid',
  imports: [NgFor, JsonPipe, NgIf],
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

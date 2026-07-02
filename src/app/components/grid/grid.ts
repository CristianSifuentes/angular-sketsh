import { CommonModule, NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-grid',
  imports: [],
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

    public name = 'Cristian';


}

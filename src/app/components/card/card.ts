import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  imports: [],
  templateUrl: './card.html',
  styleUrl: './card.scss',
})
export class Card {
  @Input({alias: 'aliasTitle', required: true}) public title!: string;
  @Input() public index!: number;
  @Input() public angularVersion!: string;
  @Input() public description!: string;
}

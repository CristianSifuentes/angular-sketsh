import { Component, EventEmitter, input, Input, Output } from '@angular/core';

@Component({
  selector: 'app-card',
  imports: [],
  templateUrl: './card.html',
  styleUrl: './card.scss',
})
export class Card {

  // Input transform
  private _variable !: string;

  @Input({alias: 'aliasTitle', required: true}) public title!: string;
  @Input() public index!: number;
  @Input() public angularVersion!: string;
  @Input() public description!: string;
  @Input() public set variable(value:string) {
    //this._variable = parameter value
    this._variable = value.toUpperCase();
    console.log(this._variable);
  };
  @Output() public onMessage = new EventEmitter<string>();

  public sendMessage(): void {
    console.log('something');
    this.onMessage.emit(`Received message #${this.title}`);
  }
  //(click) -> is about zone.js

  // input signals
  a = input<boolean>();
  //Input transform
  public get  variable(){
    return this._variable;
  }
}

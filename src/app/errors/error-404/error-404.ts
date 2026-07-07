import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from "@angular/router";

@Component({
  selector: 'app-error-404',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './error-404.html',
  styleUrl: './error-404.scss',
})
export class Error404 {}

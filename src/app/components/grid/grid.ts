import { CommonModule, NgFor, JsonPipe, NgIf, NgSwitch, NgSwitchCase, NgSwitchDefault } from '@angular/common';
import { Component } from '@angular/core';

/* Tier 1 los que usas todo el tiempo */
/*
@angular/core:Component, Input, Output, inject, signal, computed, effect, OnInit, OnDestroy, ChangeDetectionStrategy
@angular/common:NgIf, NgFor, NgSwitch, CommonModule (aunque en angular 22 con standalone components esto cambia)

*/

/** Tier 2 Muy frecuente, especialmente en componentes mas complejos */
/* Desde 
@angular/core: ViewChild, ContentChild, HostListener, HostBinding, Directive, Pipe, Injectable
@angular/forms: ReactiveFormsModule, FormGroup, FromControl, FromArray, Validators.
@anguar/router:Router, ActivatedRoute, Routes.
*/

/** Tier 3 Especializado, pero importante saber que existe:
  
Desde 
@angular/core:ApplicationRef, ChangeDetectorRef, ElementRef, Renderer2, InjectionToken, Injector.
@angular/platform-browser:DomSanitizer, BrowserModule.
@angular/http: HttpClient, HttpInterceptor

Tengo que volver aqui para poder analizar cada 1 (es posible que algun nombre o texto este mal, ahorita solo importa tenerlos em el mapa mental)
*/

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

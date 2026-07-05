import { CommonModule, NgFor, JsonPipe, NgIf, NgSwitch, NgSwitchCase, NgSwitchDefault } from '@angular/common';
import { Component } from '@angular/core';
import { Card } from "../card/card";
import { type ConceptModel } from '../../models/concepts.model';

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
  imports: [NgFor, JsonPipe, NgIf, NgSwitch, NgSwitchCase, NgSwitchDefault, Card],
  templateUrl: './grid.html',
  styleUrl: './grid.scss',
})
export class Grid {

  public concepts: ConceptModel[] = [
    {
      id: '1',
      name: 'Components & Templates',
      angularversion: 'v2',
      description: 'The foundational building block of Angular: a class decorated with @Component paired with an HTML template, replacing AngularJS controllers/scopes.'
    },
    {
      id: '2',
      name: 'Dependency Injection',
      angularversion: 'v2',
      description: 'A hierarchical injector system that supplies services to components and directives via constructor injection.'
    },
    {
      id: '3',
      name: 'NgModules',
      angularversion: 'v2 · optional since v19',
      description: '@NgModule grouped components, directives and pipes into cohesive blocks; standalone APIs later made them optional.'
    },
    {
      id: '4',
      name: 'RxJS & Observables',
      angularversion: 'v2',
      description: 'Reactive Extensions power HttpClient, EventEmitter, reactive forms and the Router with composable async streams.'
    },
    {
      id: '5',
      name: 'Ahead-of-Time (AOT) Compilation',
      angularversion: 'v2 · default since v9',
      description: 'Compiles templates to JavaScript at build time instead of at runtime, producing smaller bundles and faster rendering.'
    },
    {
      id: '6',
      name: 'Change Detection',
      angularversion: 'v2 · zoneless developer preview in v18 · default for new apps in v21',
      description: 'The mechanism that syncs component state with the DOM, evolving from Zone.js-based dirty checking toward signal-driven, zoneless detection.'
    },
    {
      id: '7',
      name: 'HttpClientModule',
      angularversion: 'v4.3',
      description: 'A testable HTTP client with interceptors, typed responses and RxJS-based APIs, replacing the original Http service.'
    },
    {
      id: '8',
      name: 'Angular Universal (SSR)',
      angularversion: 'v4',
      description: 'Official server-side rendering support that renders the app to static HTML on the server for faster first paint and SEO.'
    },
    {
      id: '9',
      name: 'Tree-Shakable Providers',
      angularversion: 'v6',
      description: '`providedIn: \'root\'` lets unused injectable services be removed from the final bundle automatically.'
    },
    {
      id: '10',
      name: 'Angular Elements',
      angularversion: 'v6',
      description: 'Packages Angular components as native, framework-agnostic Custom Elements usable outside an Angular app.'
    },
    {
      id: '11',
      name: 'CDK Virtual Scrolling & Drag-Drop',
      angularversion: 'v7',
      description: 'Component Dev Kit primitives for rendering large lists efficiently and building drag-and-drop interactions.'
    },
    {
      id: '12',
      name: 'Ivy Compiler & Renderer',
      angularversion: 'v8 (opt-in) · default in v9',
      description: 'Next-generation compilation and rendering pipeline delivering smaller bundles, faster builds and better debugging.'
    },
    {
      id: '13',
      name: 'Full Ivy (View Engine Removed)',
      angularversion: 'v13',
      description: 'The legacy View Engine compiler was fully removed and IE11 support dropped, leaving Ivy as the only rendering pipeline.'
    },
    {
      id: '14',
      name: 'Standalone Components',
      angularversion: 'v14 (developer preview) · stable in v15 · default in v19',
      description: 'Components, directives and pipes that declare their own imports directly, removing the need for NgModules.'
    },
    {
      id: '15',
      name: 'Typed Reactive Forms',
      angularversion: 'v14',
      description: 'FormControl, FormGroup and FormArray became strictly generic, catching form structure and value-type errors at compile time.'
    },
    {
      id: '16',
      name: 'NgOptimizedImage',
      angularversion: 'v15',
      description: 'A directive that enforces image performance best practices such as priority loading, srcset and lazy loading.'
    },
    {
      id: '17',
      name: 'Signals',
      angularversion: 'v16 (developer preview) · stable in v20',
      description: 'Fine-grained reactive primitives (signal, computed, effect) that track dependencies and update the DOM without relying on Zone.js.'
    },
    {
      id: '18',
      name: 'Non-Destructive Hydration',
      angularversion: 'v16',
      description: 'SSR hydration that reuses the server-rendered DOM instead of destroying and re-rendering it on the client.'
    },
    {
      id: '19',
      name: 'Control Flow',
      angularversion: 'v17 (developer preview) · stable in v18',
      description: 'Built-in @if, @for and @switch template syntax that replaces *ngIf/*ngFor/[ngSwitch] with better performance and ergonomics.'
    },
    {
      id: '20',
      name: 'Deferrable Views (@defer)',
      angularversion: 'v17 (developer preview) · stable in v18',
      description: 'Template blocks that lazily load their dependencies based on triggers like viewport, interaction or idle time.'
    },
    {
      id: '21',
      name: 'Signal Forms & Resource API',
      angularversion: 'v21 (experimental) · stable in v22',
      description: 'A signal-based reactive forms model plus resource/rxResource/httpResource primitives for signal-driven async data fetching.'
    }
  ];

    public person = {
      name: 'Nico',
      lastName: 'Stan',
      age: 20
    };


}

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cssgrid } from './cssgrid';

describe('Cssgrid', () => {
  let component: Cssgrid;
  let fixture: ComponentFixture<Cssgrid>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Cssgrid],
    }).compileComponents();

    fixture = TestBed.createComponent(Cssgrid);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

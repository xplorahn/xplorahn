import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LetraslogoComponent } from './letraslogo.component';

describe('LetraslogoComponent', () => {
  let component: LetraslogoComponent;
  let fixture: ComponentFixture<LetraslogoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LetraslogoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LetraslogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

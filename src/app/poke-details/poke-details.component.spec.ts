import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PokeDetailsComponent } from './poke-details.component';

describe('PokeDetailsComponent', () => {
  let component: PokeDetailsComponent;
  let fixture: ComponentFixture<PokeDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PokeDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PokeDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

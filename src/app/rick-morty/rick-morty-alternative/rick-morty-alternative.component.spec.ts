import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RickMortyAlternativeComponent } from './rick-morty-alternative.component';

describe('RickMortyAlternativeComponent', () => {
  let component: RickMortyAlternativeComponent;
  let fixture: ComponentFixture<RickMortyAlternativeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RickMortyAlternativeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RickMortyAlternativeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

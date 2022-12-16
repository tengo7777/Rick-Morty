import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RickMortyComponent } from './rick-morty.component';

describe('RickMortyComponent', () => {
  let component: RickMortyComponent;
  let fixture: ComponentFixture<RickMortyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RickMortyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RickMortyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CharccCharactersPage } from './charcc-characters.page';

describe('CharccCharactersPage', () => {
  let component: CharccCharactersPage;
  let fixture: ComponentFixture<CharccCharactersPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CharccCharactersPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

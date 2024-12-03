import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CharccInformationsPage } from './charcc-informations.page';

describe('CharccInformationsPage', () => {
  let component: CharccInformationsPage;
  let fixture: ComponentFixture<CharccInformationsPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CharccInformationsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

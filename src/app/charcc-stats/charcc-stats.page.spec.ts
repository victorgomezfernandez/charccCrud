import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CharccStatsPage } from './charcc-stats.page';

describe('CharccStatsPage', () => {
  let component: CharccStatsPage;
  let fixture: ComponentFixture<CharccStatsPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CharccStatsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

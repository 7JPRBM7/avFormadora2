import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MudarCorPage } from './mudar-cor.page';

describe('MudarCorPage', () => {
  let component: MudarCorPage;
  let fixture: ComponentFixture<MudarCorPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(MudarCorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

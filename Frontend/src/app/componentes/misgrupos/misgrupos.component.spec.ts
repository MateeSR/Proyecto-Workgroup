import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MisgruposComponent } from './misgrupos.component';

describe('MisgruposComponent', () => {
  let component: MisgruposComponent;
  let fixture: ComponentFixture<MisgruposComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MisgruposComponent]
    });
    fixture = TestBed.createComponent(MisgruposComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

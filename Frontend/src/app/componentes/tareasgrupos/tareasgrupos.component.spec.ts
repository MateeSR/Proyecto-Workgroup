import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TareasgruposComponent } from './tareasgrupos.component';

describe('TareasgruposComponent', () => {
  let component: TareasgruposComponent;
  let fixture: ComponentFixture<TareasgruposComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TareasgruposComponent]
    });
    fixture = TestBed.createComponent(TareasgruposComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

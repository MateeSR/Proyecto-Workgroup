import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MistareasComponent } from './mistareas.component';

describe('MistareasComponent', () => {
  let component: MistareasComponent;
  let fixture: ComponentFixture<MistareasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MistareasComponent]
    });
    fixture = TestBed.createComponent(MistareasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

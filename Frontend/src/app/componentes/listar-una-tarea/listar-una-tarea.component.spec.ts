import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarUnaTareaComponent } from './listar-una-tarea.component';

describe('ListarUnaTareaComponent', () => {
  let component: ListarUnaTareaComponent;
  let fixture: ComponentFixture<ListarUnaTareaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListarUnaTareaComponent]
    });
    fixture = TestBed.createComponent(ListarUnaTareaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

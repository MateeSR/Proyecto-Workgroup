import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalBorrarTareaComponent } from './modal-borrar-tarea.component';

describe('ModalBorrarTareaComponent', () => {
  let component: ModalBorrarTareaComponent;
  let fixture: ComponentFixture<ModalBorrarTareaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModalBorrarTareaComponent]
    });
    fixture = TestBed.createComponent(ModalBorrarTareaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

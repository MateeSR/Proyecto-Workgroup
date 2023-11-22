import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificarGruposComponent } from './modificar-grupos.component';

describe('ModificarGruposComponent', () => {
  let component: ModificarGruposComponent;
  let fixture: ComponentFixture<ModificarGruposComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModificarGruposComponent]
    });
    fixture = TestBed.createComponent(ModificarGruposComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

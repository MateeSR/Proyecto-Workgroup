import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarUnGrupoComponent } from './listar-un-grupo.component';

describe('ListarUnGrupoComponent', () => {
  let component: ListarUnGrupoComponent;
  let fixture: ComponentFixture<ListarUnGrupoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListarUnGrupoComponent]
    });
    fixture = TestBed.createComponent(ListarUnGrupoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

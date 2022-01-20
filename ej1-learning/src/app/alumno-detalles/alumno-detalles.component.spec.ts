import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlumnoDetallesComponent } from './alumno-detalles.component';

describe('AlumnoDetallesComponent', () => {
  let component: AlumnoDetallesComponent;
  let fixture: ComponentFixture<AlumnoDetallesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlumnoDetallesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlumnoDetallesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

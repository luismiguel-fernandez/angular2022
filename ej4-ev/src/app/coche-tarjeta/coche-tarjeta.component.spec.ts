import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CocheTarjetaComponent } from './coche-tarjeta.component';

describe('CocheTarjetaComponent', () => {
  let component: CocheTarjetaComponent;
  let fixture: ComponentFixture<CocheTarjetaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CocheTarjetaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CocheTarjetaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

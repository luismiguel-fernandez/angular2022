import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavIconoComponent } from './fav-icono.component';

describe('FavIconoComponent', () => {
  let component: FavIconoComponent;
  let fixture: ComponentFixture<FavIconoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FavIconoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FavIconoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

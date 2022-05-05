import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MidpaneComponent } from './midpane.component';

describe('MidpaneComponent', () => {
  let component: MidpaneComponent;
  let fixture: ComponentFixture<MidpaneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MidpaneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MidpaneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CityAtHomeIconComponent } from './city-at-home-icon.component';

describe('CityAtHomeIconComponent', () => {
  let component: CityAtHomeIconComponent;
  let fixture: ComponentFixture<CityAtHomeIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CityAtHomeIconComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CityAtHomeIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

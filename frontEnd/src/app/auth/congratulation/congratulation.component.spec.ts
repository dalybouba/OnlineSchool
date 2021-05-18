import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CongratulationComponent } from './congratulation.component';

describe('CongratulationComponent', () => {
  let component: CongratulationComponent;
  let fixture: ComponentFixture<CongratulationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CongratulationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CongratulationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

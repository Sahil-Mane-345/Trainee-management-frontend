import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TraineeCreate } from './trainee-create';

describe('TraineeCreate', () => {
  let component: TraineeCreate;
  let fixture: ComponentFixture<TraineeCreate>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TraineeCreate],
    }).compileComponents();

    fixture = TestBed.createComponent(TraineeCreate);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

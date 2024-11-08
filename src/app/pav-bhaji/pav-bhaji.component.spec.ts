import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PavBhajiComponent } from './pav-bhaji.component';

describe('PavBhajiComponent', () => {
  let component: PavBhajiComponent;
  let fixture: ComponentFixture<PavBhajiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PavBhajiComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PavBhajiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

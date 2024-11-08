import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NorthIndianComponent } from './north-indian.component';

describe('NorthIndianComponent', () => {
  let component: NorthIndianComponent;
  let fixture: ComponentFixture<NorthIndianComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NorthIndianComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NorthIndianComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

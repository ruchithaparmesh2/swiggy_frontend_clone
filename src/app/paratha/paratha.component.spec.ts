import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParathaComponent } from './paratha.component';

describe('ParathaComponent', () => {
  let component: ParathaComponent;
  let fixture: ComponentFixture<ParathaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ParathaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParathaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

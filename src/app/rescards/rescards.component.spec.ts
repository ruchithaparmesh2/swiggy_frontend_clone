import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RescardsComponent } from './rescards.component';

describe('RescardsComponent', () => {
  let component: RescardsComponent;
  let fixture: ComponentFixture<RescardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RescardsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RescardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

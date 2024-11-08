import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstamartComponent } from './instamart.component';

describe('InstamartComponent', () => {
  let component: InstamartComponent;
  let fixture: ComponentFixture<InstamartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InstamartComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InstamartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

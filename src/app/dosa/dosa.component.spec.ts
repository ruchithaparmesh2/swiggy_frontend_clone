import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DosaComponent } from './dosa.component';

describe('DosaComponent', () => {
  let component: DosaComponent;
  let fixture: ComponentFixture<DosaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DosaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DosaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

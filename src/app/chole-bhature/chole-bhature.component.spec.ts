import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CholeBhatureComponent } from './chole-bhature.component';

describe('CholeBhatureComponent', () => {
  let component: CholeBhatureComponent;
  let fixture: ComponentFixture<CholeBhatureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CholeBhatureComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CholeBhatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

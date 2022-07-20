import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerloginnavbarComponent } from './customerloginnavbar.component';

describe('CustomerloginnavbarComponent', () => {
  let component: CustomerloginnavbarComponent;
  let fixture: ComponentFixture<CustomerloginnavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerloginnavbarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerloginnavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

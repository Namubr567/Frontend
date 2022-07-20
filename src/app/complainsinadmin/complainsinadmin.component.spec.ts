import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComplainsinadminComponent } from './complainsinadmin.component';

describe('ComplainsinadminComponent', () => {
  let component: ComplainsinadminComponent;
  let fixture: ComponentFixture<ComplainsinadminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComplainsinadminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComplainsinadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

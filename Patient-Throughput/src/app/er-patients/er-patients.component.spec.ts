import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ERPatientsComponent } from './er-patients.component';

describe('ERPatientsComponent', () => {
  let component: ERPatientsComponent;
  let fixture: ComponentFixture<ERPatientsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ERPatientsComponent]
    });
    fixture = TestBed.createComponent(ERPatientsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

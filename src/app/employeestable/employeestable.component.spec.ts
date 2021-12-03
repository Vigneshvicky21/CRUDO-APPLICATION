import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeestableComponent } from './employeestable.component';

describe('EmployeestableComponent', () => {
  let component: EmployeestableComponent;
  let fixture: ComponentFixture<EmployeestableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeestableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeestableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

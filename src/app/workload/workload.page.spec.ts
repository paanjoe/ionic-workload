import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkloadPage } from './workload.page';

describe('WorkloadPage', () => {
  let component: WorkloadPage;
  let fixture: ComponentFixture<WorkloadPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkloadPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkloadPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

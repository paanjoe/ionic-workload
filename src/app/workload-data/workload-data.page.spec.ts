import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkloadDataPage } from './workload-data.page';

describe('WorkloadDataPage', () => {
  let component: WorkloadDataPage;
  let fixture: ComponentFixture<WorkloadDataPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkloadDataPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkloadDataPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

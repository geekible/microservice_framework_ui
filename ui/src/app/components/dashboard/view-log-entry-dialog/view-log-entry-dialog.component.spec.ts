import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewLogEntryDialogComponent } from './view-log-entry-dialog.component';

describe('ViewLogEntryDialogComponent', () => {
  let component: ViewLogEntryDialogComponent;
  let fixture: ComponentFixture<ViewLogEntryDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewLogEntryDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewLogEntryDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

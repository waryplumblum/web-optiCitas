import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ScheduleAppointmentsPage } from './schedule-appointments.page';

describe('ScheduleAppointmentsPage', () => {
  let component: ScheduleAppointmentsPage;
  let fixture: ComponentFixture<ScheduleAppointmentsPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ScheduleAppointmentsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

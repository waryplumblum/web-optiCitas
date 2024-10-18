import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ManageDoctorsPage } from './manage-doctors.page';

describe('ManageDoctorsPage', () => {
  let component: ManageDoctorsPage;
  let fixture: ComponentFixture<ManageDoctorsPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageDoctorsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ManageProceduresPage } from './manage-procedures.page';

describe('ManageProceduresPage', () => {
  let component: ManageProceduresPage;
  let fixture: ComponentFixture<ManageProceduresPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageProceduresPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

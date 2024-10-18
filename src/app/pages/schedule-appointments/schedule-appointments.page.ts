import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';

@Component({
  selector: 'app-schedule-appointments',
  templateUrl: './schedule-appointments.page.html',
  styleUrls: ['./schedule-appointments.page.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, SharedModule]
})
export class ScheduleAppointmentsPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';

@Component({
  selector: 'app-view-appointments',
  templateUrl: './view-appointments.page.html',
  styleUrls: ['./view-appointments.page.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, SharedModule]
})
export class ViewAppointmentsPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

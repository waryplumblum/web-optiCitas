import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';

@Component({
  selector: 'app-manage-doctors',
  templateUrl: './manage-doctors.page.html',
  styleUrls: ['./manage-doctors.page.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, SharedModule]
})
export class ManageDoctorsPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

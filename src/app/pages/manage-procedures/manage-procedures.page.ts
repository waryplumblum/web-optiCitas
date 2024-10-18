import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';

@Component({
  selector: 'app-manage-procedures',
  templateUrl: './manage-procedures.page.html',
  styleUrls: ['./manage-procedures.page.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, SharedModule]
})
export class ManageProceduresPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

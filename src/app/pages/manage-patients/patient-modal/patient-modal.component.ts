import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { Patient } from '../manage-patients.page';
import { SharedModule } from 'src/app/shared/shared.module';



@Component({
  selector: 'app-patient-modal',
  templateUrl: './patient-modal.component.html',
  styleUrls: ['./patient-modal.component.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, SharedModule]
})
export class PatientModalComponent  {
  patient: Patient = { id: 0, name: '', contact: '' }; // Inicializa con un paciente vacío
  isEdit: boolean = false;

  constructor(private modalController: ModalController) { }

  // ngOnInit() {}

  dismiss() {
    this.modalController.dismiss();
  }

  onSubmit() {
    this.modalController.dismiss(this.patient); // Devuelve el paciente al cerrar
  }
}

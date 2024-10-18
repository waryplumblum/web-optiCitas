import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';

import { ModalController } from '@ionic/angular';
// import { IonContent, IonHeader, IonTitle, IonToolbar, IonList, IonItem, IonLabel, IonButton, IonIcon, IonButtons } from '@ionic/angular';
import { PatientModalComponent } from './patient-modal/patient-modal.component';

export interface Patient {
  id: number;
  name: string;
  contact: string;
  email?: string;
  address?: string;
  dob?: string;
  notes?: string;
}

@Component({
  selector: 'app-manage-patients',
  templateUrl: './manage-patients.page.html',
  styleUrls: ['./manage-patients.page.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, SharedModule, PatientModalComponent,]
})
export class ManagePatientsPage implements OnInit {
  patients: Patient[] = []; // Array para almacenar los pacientes
  nextId: number = 1; // Variable para generar un ID único

  constructor(private modalController: ModalController) { }

  ngOnInit() {
    // Inicializa la lista de pacientes (puedes cargarla desde una base de datos aquí)
    this.patients = [
      { id: this.nextId++, name: 'Juan Pérez', contact: '1234567890' },
      { id: this.nextId++, name: 'María Gómez', contact: '0987654321' },
    ];
  }

  async addPatient() {
    const modal = await this.modalController.create({
      component: PatientModalComponent,
      componentProps: { isEdit: false }
    });
    modal.onDidDismiss().then((result) => {
      const newPatient: Patient = result.data;
      if (newPatient) {
        this.patients.push({ ...newPatient, id: this.nextId++ }); // Añade el nuevo paciente
      }
    });
    await modal.present();
  }

  async editPatient(patient: Patient) {
    const modal = await this.modalController.create({
      component: PatientModalComponent,
      componentProps: { patient, isEdit: true } // Pasa el paciente actual al modal
    });
    modal.onDidDismiss().then((result) => {
      const updatedPatient: Patient = result.data;
      if (updatedPatient) {
        const index = this.patients.findIndex(p => p.id === updatedPatient.id);
        this.patients[index] = updatedPatient; // Actualiza el paciente en la lista
      }
    });
    await modal.present();
  }

  deletePatient(id: number) {
    this.patients = this.patients.filter(patient => patient.id !== id);
  }
}

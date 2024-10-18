import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonList, IonItem, IonLabel, IonButton, IonIcon, IonButtons } from '@ionic/angular/standalone';

interface Patient {
  id: number;
  name: string;
  contact: string;
}

@Component({
  selector: 'app-manage-patients',
  templateUrl: './manage-patients.page.html',
  styleUrls: ['./manage-patients.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, IonList, IonItem, IonLabel, IonButton, IonIcon, IonButtons, CommonModule, FormsModule]
})
export class ManagePatientsPage implements OnInit {
  patients: Patient[] = []; // Array para almacenar los pacientes
  nextId: number = 1; // Variable para generar un ID único

  constructor() { }

  ngOnInit() {
    // Inicializa la lista de pacientes (puedes cargarla desde una base de datos aquí)
    this.patients = [
      { id: this.nextId++, name: 'Juan Pérez', contact: '1234567890' },
      { id: this.nextId++, name: 'María Gómez', contact: '0987654321' },
    ];
  }

  addPatient() {
    const newPatient: Patient = { id: this.nextId++, name: 'Nuevo Paciente', contact: '1234567890' }; // Lógica para obtener datos del nuevo paciente
    this.patients.push(newPatient);
  }

  editPatient(patient: Patient) {
    // Lógica para editar un paciente (puedes abrir un modal o una nueva página)
    console.log('Editando paciente:', patient);
  }

  deletePatient(id: number) {
    this.patients = this.patients.filter(patient => patient.id !== id);
  }
}

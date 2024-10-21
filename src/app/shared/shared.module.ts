import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular'; // Importa IonicModule

import { addIcons } from 'ionicons';
import {
  add, create, trash, close
} from 'ionicons/icons';

@NgModule({
  imports: [
    CommonModule,
    IonicModule // Añade IonicModule aquí
  ],
  exports: [
    IonicModule // Exporta IonicModule para que otros módulos lo puedan usar
  ]
})
export class SharedModule {
  constructor() {
    // Registrar iconos de forma global
    addIcons({
      add, create, trash, close
    });
  }
}

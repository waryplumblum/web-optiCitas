import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular'; // Importa IonicModule

@NgModule({
  imports: [
    CommonModule,
    IonicModule // Añade IonicModule aquí
  ],
  exports: [
    IonicModule // Exporta IonicModule para que otros módulos lo puedan usar
  ]
})
export class SharedModule { }

import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { IonApp, IonSplitPane, IonMenu, IonContent, IonList, IonListHeader, IonNote, IonMenuToggle, IonItem, IonIcon, IonLabel, IonRouterOutlet, IonRouterLink } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { homeOutline, homeSharp, calendarOutline, calendarSharp, listOutline, listSharp, peopleOutline, peopleSharp, medkitOutline, medkitSharp, clipboardOutline, clipboardSharp, personOutline, personSharp, add, create, trash } from 'ionicons/icons';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: true,
  imports: [RouterLink, RouterLinkActive, CommonModule, IonApp, IonSplitPane, IonMenu, IonContent, IonList, IonListHeader, IonNote, IonMenuToggle, IonItem, IonIcon, IonLabel, IonRouterLink, IonRouterOutlet],
})
export class AppComponent {
  public appPages = [
    { title: 'Home', url: '/home', icon: 'home' },
    { title: 'Agendar Citas', url: '/schedule-appointments', icon: 'calendar' },
    { title: 'Consultar Citas', url: '/view-appointments', icon: 'list' },
    { title: 'Gestionar Pacientes', url: '/manage-patients', icon: 'people' },
    { title: 'Gestionar Doctores', url: '/manage-doctors', icon: 'medkit' },
    { title: 'Gestionar Procedimientos', url: '/manage-procedures', icon: 'clipboard' },
    { title: 'Ver Perfil', url: '/profile', icon: 'person' },
  ];

  constructor() {
    addIcons({
      homeOutline, homeSharp,
      calendarOutline, calendarSharp,
      listOutline, listSharp,
      peopleOutline, peopleSharp,
      medkitOutline, medkitSharp,
      clipboardOutline, clipboardSharp,
      personOutline, personSharp,
      add, create, trash
    });
  }
}

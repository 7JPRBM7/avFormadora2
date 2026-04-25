import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonList, IonItem, IonLabel, IonRange, IonButton } from '@ionic/angular/standalone';
import { RouterLink} from '@angular/router'

@Component({
  selector: 'app-mudar-cor',
  templateUrl: './mudar-cor.page.html',
  styleUrls: ['./mudar-cor.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonList, IonItem, IonLabel, IonRange, IonButton, RouterLink]
})
export class MudarCorPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

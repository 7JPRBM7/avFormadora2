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

  vermelho: number = 0;
  verde: number = 0;
  azul: number = 0;

  corBotao1: string = 'rgb(255, 102, 0)';
  corFundo: string = '';

  constructor() { }

  ngOnInit() {
  }

  mudarCorBotao1() {
    this.corBotao1 = `rgb(${this.vermelho}, ${this.verde}, ${this.azul})`;
    console.log("A cor gerada foi: ", this.corBotao1);
  };

  mudarCorFundo() {
    this.corFundo = `rgb(${this.vermelho}, ${this.verde}, ${this.azul})`;
    console.log("A cor de fundo gerada foi: ", this.corFundo);
  };

}

import { Component } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css'],
})
export class PortfolioComponent {
  imgs_Src: string[] = [
    './assets/imgs/cabin.png',
    './assets/imgs/cake.png',
    './assets/imgs/circus.png',
    './assets/imgs/game.png',
    './assets/imgs/safe.png',
    './assets/imgs/submarine.png',
  ];
}

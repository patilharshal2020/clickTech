import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

interface ImgData {
  title?: string,
  url: string,
  description?: string
}
@Component({
  selector: 'app-corousel',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './corousel.component.html',
  styleUrl: './corousel.component.css'
})
export class CorouselComponent implements OnInit {

  bannerImages: ImgData[] = [];

  ngOnInit(): void {
    this.bannerImages =  [
      {title: 'Title for first slide', url: '../../assets/abhay-rajeev-r2-cont-stcok-comp.jpg', description: 'Description for first slide. check out further.'},
      {title: 'Title for second slide', url: '../../assets/abhay-rajeev-r8-cont-stock.jpg', description: 'Description for second slide. check out further.'},
      {title: 'Title for third slide', url: '../../assets/Modsters-Contessa-4.jpg', description: 'Description for third slide. check out further.'},
    ];
  }

}

import { Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'data-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})

export class CardsComponent implements OnInit {
  @Input() 
  datas!:any[];
  objectKeys = Object.keys;
  constructor() {  }

  originalOrder() {
    return 0;
  }

  ngOnInit(): void {
  }

}

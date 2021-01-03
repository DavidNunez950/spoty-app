import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {


  @Input() artist:string;
  @Input() titel:string;
  @Input() type:string;
  @Input() date:string; 
  @Input() img:string[]; 
  
  constructor() { }

  ngOnInit(): void {
  }

}

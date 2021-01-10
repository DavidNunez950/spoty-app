import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {

  @Input() artist:string;
  @Input() titel:string;
  @Input() type:string;
  @Input() date:string;  
  @Input() artistId:string;
  @Input() img:string[]; 
  
  constructor(private router: Router) { }

  getArtist() {
    this.router.navigate(['/artist', this.artistId])
    return false;
  }
}

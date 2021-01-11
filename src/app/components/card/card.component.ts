import { Input } from '@angular/core';
import { ElementRef } from '@angular/core';
import { ViewChild } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {

  @Input() items:any[];
  
  constructor(private router: Router) { }

  getArtist(item: any) {
    let id: string = (item.artists == undefined) ? item.id : item.artists[0].id;
    this.router.navigate(['/artist', id])
    return false;
  }
}

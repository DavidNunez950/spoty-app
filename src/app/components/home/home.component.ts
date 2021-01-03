import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  
  todayDate : Date = new Date();
  songs:any[];
  
  constructor( private spotify:SpotifyService ) {
    this.songs = this.spotify.getNewRealasis()
   }

}

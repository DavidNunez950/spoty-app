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
  artist:any[];
  
  constructor( private spotify:SpotifyService ) {
    this.spotify.getNewRealasis()
    .subscribe((data:any) => {
      this.songs = data; 
    });
    this.spotify.getArtist()
    .subscribe((data:any) => {
        console.log(data)
      this.artist = data.sort(function() {return Math.random() - 0.5});
    });
   }

}

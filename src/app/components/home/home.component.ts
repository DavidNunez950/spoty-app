import { Component } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  loading: boolean;
  todayDate: Date = new Date();
  songs : any[];
  artist: any[];
  
  constructor( private spotify:SpotifyService ) {
    this.loading = true;
    this.spotify.getNewRealasis()
    .subscribe((data:any) => {
      this.songs = this.prepareCards(data); 
    });
    this.spotify.getArtists()
    .subscribe((data:any) => {
      this.artist  = this.prepareCards(data);
      this.loading = false;
    });
   }
   
    private prepareCards(arr: any[]) {
      arr = arr.sort(()=> Math.random() - 0.5);
      arr = arr.slice(0, 5);
      return arr;
    }
}

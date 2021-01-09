import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  items: any[];
  loading: boolean;

  constructor(private spotify: SpotifyService) {
    this.loading = false;
   }

  ngOnInit(): void {
  }
  search(input) {
    this.loading = true;
    this.spotify.searchArtist(input.value)
    .subscribe( (data: any[]) => {
      this.items = data;
      this.loading = false;
    });
  }
}

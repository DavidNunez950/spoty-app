import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  items: any[];

  constructor(private spotify: SpotifyService) { }

  ngOnInit(): void {
  }
  search(input) {
    this.spotify.searchArtist(input.value)
    .subscribe( (data: any[]) => {
      this.items = data;
      console.log(this.items)
    });
  }
}

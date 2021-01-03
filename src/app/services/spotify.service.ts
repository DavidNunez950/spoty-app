import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})

export class SpotifyService {

    
    constructor( private http: HttpClient  ) { }
    


    public getNewRealasis(country:string = 'US', limit:number = 30) {

        let songs = [];

        const headers = new HttpHeaders({
            'Authorization': 'Bearer BQCFOs8g-HmeGaK-nPRbCsb1knNF9zI0AU76-ca_j-8U5Who8l70dd61K0RTECLe28dFzgDkuqIfSbqWa7I'
        })

        this.http.get( `https://api.spotify.com/v1/browse/new-releases?country=${ country }&limit=${ limit }&offset=1`, { headers })
        .subscribe( (data:any) =>  data['albums'].items.forEach( song => {
    songs.push(song)            
        })); 
console.log (songs)
        return songs;
    }
}
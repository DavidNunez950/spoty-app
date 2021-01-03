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
            'Authorization': 'Bearer BQDBcmi3gKSUfzrJ0cqiwU4fQn5RM8rz0aJt2FNsaU69-BDlon7bsi7FuBfRpBz8CnIznnL7Ds-FFsrDHZM'
        })

        this.http.get( `https://api.spotify.com/v1/browse/new-releases?country=${ country }&limit=${ limit }&offset=1`, { headers })
        .subscribe( (data:any) =>  data['albums'].items.forEach( song => {
    songs.push(song)            
        })); 
console.log (songs)
        return songs;
    }
}
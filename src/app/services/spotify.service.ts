import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})

export class SpotifyService {

    
    constructor( private http: HttpClient  ) { }
    


    public getNewRealasis(country :string ='US', limit:number = 10) {

        const headers = new HttpHeaders({
            'Authorization': 'BQDocL_sTUvYx-AQXJg9Va1HVRUfxyIcBzOwN52ZevtioP-ITYv62B5aAmlosa1LxmYgN92MTqGBwHIbFm0'
        })

        this.http.get( `https://api.spotify.com/v1/browse/new-releases?country=${ country }&limit=${ limit }&offset=1`, { headers })
        .subscribe( r => console.log( r ) )

    }
}
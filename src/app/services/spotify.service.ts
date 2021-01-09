import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})

export class SpotifyService {

    constructor( private http: HttpClient  ) { }


    private getQuery(query: string) {
        const url = `https://api.spotify.com/v1/${ query }`;
        const headers = new HttpHeaders({
            'Authorization': 'Bearer BQBp4dhEjkO44ipBPjhw6RUnmSHts6GQetdgNiiCfKiTheZVBMvhUHPQWdGLONOFOJiEiMt7eMDu06oq3gc'
        });
        return this.http.get( url , { headers });
    } 

    public getNewRealasis(country:string = 'US', limit:number = 30) {
       return  this.getQuery(`browse/new-releases?country=${ country }&limit=${ limit }&offset=1`)
        .pipe( map ((data:any) => data['albums'].items.sort(function() {return Math.random() - 0.5})) ) ; 
    }

    public getArtists() {
        const artistsids = '4RVnAU35WRWra6OZ3CbbMA%2C6M2wZ9GZgrQXHCFfjv46we%2C6wMr4zKPrrR0UVz08WtUWc%2C5fYyfkrYbHDQreGr7cUul0%2C0W8WpLB5WoXLgiA193LXk6%2C5icKdCmMhNMYoAzVBAWt39%2C6Xgp2XMz1fhVYe7i6yNAax%2C7mnBLXK823vNxN3UWB7Gfz%2C4e9TBaTlI3LVQz3tkTYC0I%2C3CygdxquGHurS7f9LjNLkv%2C053q0ukIDRgzwTr4vNSwab%2C7Hd38PVp634oGEb9pIDs5d%2C1QRj3hoop9Mv5VvHQkwPEp%2C2sG4zTOLvjKG1PSoOyf5Ej%2C3sDbKMebVH2VYcRSl7u1VC%2C6jHWWttC33OQdEDnUXtYrq%2C75u3YWqj5cBc7lxxfctOqN%2C3SKza3YPBri1k43LB1Tqy4%2C1p6CdzJRoicjRcSdWoB9Qc%2C4QrBoWLm2WNlPdbFhmlaUZ%2C7gqsi6aBSkRMJoL9psKqMr%2C2zAvisjImPICTNsRgagqlV%2C2PiKaajF8T1X6KGgvYlxOD%2C09b4q9Vfmuvxb8LuOrhp7W%2C7omzannyG2lfDqP5xyZo34%2C2IMZYfNi21MGqxopj9fWx8%2C0Z8XVUAOBPM4x12wKnFHEQ%2C2H3EMYFS69dhMmrX9JTkZp%2C0wnsM0ziqToBwQeEbH0akL%2C699OTQXzgjhIYAHMy9RyPD%2C6eUKZXaKkcviH0Ku9w2n3V%2C77AiFEVeAVj2ORpC85QVJs%2C0id62QV2SZZfvBn9xpmuCl%2C3hcs9uc56yIGFCSy9leWe7%2C7Eu1txygG6nJttLHbZdQOh%2C3DKkhRCGOG4e8IUPYFPfWs%2C45eNHdiiabvmbp4erw26rg%2C7lZauDnRoAC3kmaYae2opv%2C5pdyjBIaY5o1yOyexGIUc6%2C1DGAqC29aw0FpJCejAehVk%2C0fEfMW5bypHZ0A8eLnhwj5%2C0qu422H5MOoQxGjd4IzHbS%2C5BKzvAPtNXnt0LwzGvKOH3';
        return this.getQuery(`artists?ids=${ artistsids }`)
        .pipe( map ((data:any) => data['artists']) ) 
        // let query: string = ""
        // this.getNewRealasis()
        // .subscribe((data:any) => {
        //     data.forEach( item =>{ 
        //             item.artists.forEach( artist => {
        //                 query += (artist.id+',')
        //             })
        //     })
        // })
    }

    searchArtist(search: string) {
        return this.getQuery(`search?q=${ search }%20&type=artist&market=US&limit=10`)
        .pipe( map ((data:any) => data['artists'].items) ); 
    }
}
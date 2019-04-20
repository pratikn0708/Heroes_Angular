import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IHero } from './Hero'
@Injectable({
    providedIn:'root'
})
export class HerosService{
    private url_d = "http://localhost:3000/delete/"
    private url_u = "http://localhost:3000/update/"
    constructor(private _http: HttpClient){

    }

    getHeros() :Observable<IHero[]> {
        return this._http.get<IHero[]>("http://localhost:3000/display");
    }

    postHeros(heros) : Observable<IHero> {
        // console.log(heros)
        return this._http.post<IHero>("http://localhost:3000/insert",heros);
    }

    deleteHero(id): Observable<IHero> {
        this.url_d += id
        console.log(this.url_d)
        return this._http.delete<IHero>(this.url_d);
    }

    updateHero(hero,id) : Observable<IHero>{
        this.url_u += id
        console.log(this.url_u);
        return this._http.put<IHero>(this.url_u,hero);
    }
}
import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { HerosService } from './heros.service';

@Injectable()
export class HerosUpdateService{
    // public herodata =[];
    private updatedData = new BehaviorSubject(null);

    currentData = this.updatedData.asObservable();

    constructor(private _heroService: HerosService){}

    onUpdate(heroData){
        this.updatedData.next(heroData);
    }

    // getHeros(){
    //     console.log("hi");
    //     this._heroService.getHeros().subscribe(res => {
    //         this.herodata = res;
    //         console.log(this.herodata)
    //     });
    //     return this.herodata;
    // }
}

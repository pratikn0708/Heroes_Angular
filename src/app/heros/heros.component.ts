import { Component, OnInit } from '@angular/core';
import { HerosService } from './../services/heros.service';
import { Router } from '@angular/router';
import { HerosUpdateService } from '../services/heros-update.service';
@Component({
  selector: 'app-heros',
  templateUrl: './heros.component.html',
  styleUrls: ['./heros.component.scss']
})
export class HerosComponent implements OnInit {
  public herodata = [];
  constructor(private _heros: HerosService,
              private _router:Router,
              private _updateService : HerosUpdateService) {
  }

  ngOnInit() {
    this._heros.getHeros().subscribe(res => {
      this.herodata = res;
    });

    // this.herodata = this._updateService.getHeros();
    // console.log(this.herodata)
  }


  onDelete(id){
    console.log(id)
    this._heros.deleteHero(id).subscribe(res => {
      console.log('deleted the record');
      console.log(this._router)
    })
    this._router.navigate(['./heros']);
  }

  onUpdate(heroData){
    this._updateService.onUpdate(heroData);
    this._router.navigate(['/newHero']);
  }

}

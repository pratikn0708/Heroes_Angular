import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { HerosService } from './../services/heros.service';
import { Router } from '@angular/router';
import { HerosUpdateService } from '../services/heros-update.service';
@Component({
  selector: 'app-create-hero',
  templateUrl: './create-hero.component.html',
  styleUrls: ['./create-hero.component.scss']
})
export class CreateHeroComponent implements OnInit {

  updatedData = null;
  objectID;
  heroForm = new FormGroup({
    superHero : new FormControl(''),
    heroHeight : new FormControl(''),
    heroGender : new FormControl(''),
    canFly : new FormControl(''),
    fanFollowing : new FormControl(''),
    superpowers : new FormControl(''),
    fightsWon : new FormControl('')
  });

  constructor(private _newhero: HerosService,
    private _router: Router,
    private _updateService : HerosUpdateService) { }

  ngOnInit() {
    this._updateService.currentData.subscribe(
      (currentdata) => {
        this.updatedData = currentdata;
        console.log(this.updatedData, "here")
      }
    )

    // console.log(this.updatedData,"there")
    if(this.updatedData != null){
      this.heroForm = new FormGroup({
        superHero : new FormControl(this.updatedData.superHero),
        heroHeight : new FormControl(this.updatedData.heroHeight),
        heroGender : new FormControl(this.updatedData.heroGender),
        canFly : new FormControl(this.updatedData.canFly),
        fanFollowing : new FormControl(this.updatedData.fanFollowing),
        superpowers : new FormControl(this.updatedData.superpowers),
        fightsWon : new FormControl(this.updatedData.fightsWon)
      });
      this.objectID = this.updatedData._id;
      console.log(this.updatedData.heroGender)
      const div = document.getElementById("toggleButton");
      let update = document.createElement("button");
      update.setAttribute("class","btn btn-primary");
      update.innerHTML = "Update";
      div.append(update);
      update.addEventListener('click', ()=>
      {
        this.updateData();
      })
    }



  }

  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.log(this.heroForm.value);
    this._newhero.postHeros(this.heroForm.value).subscribe(() => {console.log("Inserted Successfully")})
    this._router.navigate(['./heros']);

  }

  updateData(){
    console.log(this.heroForm.value,this.objectID)
    this._newhero.updateHero(this.heroForm.value,this.objectID).subscribe(
      (result) => {
        console.log(result);
      }
    )
    this._router.navigate(['/heros']);
  }
}

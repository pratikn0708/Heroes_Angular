import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HerosComponent } from './heros/heros.component';
import { HttpClientModule } from '@angular/common/http';
import { HerosService } from './services/heros.service';
import { CreateHeroComponent } from './create-hero/create-hero.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HerosUpdateService } from './services/heros-update.service';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

// ! here we are configuring our routes
const appRoutes : Routes = [
// ! each route now is just a javascript object in this array
// ! {path:'',ComponentName}
{ path:'',component:HomeComponent},
{ path:'heros', component:HerosComponent }, // ! localhost:4200/heros
{ path:'newHero', component:CreateHeroComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HerosComponent,
    CreateHeroComponent,
    HomeComponent

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes),
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }) // ! allows us to register some routes for our main application
  ],
  providers: [HerosService,HerosUpdateService],
  bootstrap: [AppComponent]
})
export class AppModule { }

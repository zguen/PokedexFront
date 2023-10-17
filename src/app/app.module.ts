import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccueilComponent } from './pages/accueil/accueil.component';
import { PokemonsComponent } from './pages/pokemons/pokemons.component';
import { PersonalComponent } from './pages/personal/personal.component';
import { CardComponent } from './components/card/card.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HttpClientModule } from '@angular/common/http';
import { AllPokemonsComponent } from './components/all-pokemons/all-pokemons.component';
import { FiltersComponent } from './components/filters/filters.component';
import { MasterComponent } from './pages/master/master.component';
import { LoginMasterComponent } from './components/login-master/login-master.component';
import { RegisterMasterComponent } from './components/register-master/register-master.component';
import { FormsModule } from '@angular/forms';
import { ProfilMasterComponent } from './components/profil-master/profil-master.component';
import { FooterComponent } from './components/footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
    PokemonsComponent,
    PersonalComponent,
    CardComponent,
    NavbarComponent,
    AllPokemonsComponent,
    FiltersComponent,
    MasterComponent,
    LoginMasterComponent,
    RegisterMasterComponent,
    ProfilMasterComponent,
    FooterComponent
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

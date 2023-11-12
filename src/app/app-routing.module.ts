import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './pages/accueil/accueil.component';
import { PokemonsComponent } from './pages/pokemons/pokemons.component';
import { PersonalComponent } from './pages/personal/personal.component';
import { LoginMasterComponent } from './components/login-master/login-master.component';
import { PageMasterComponent } from './pages/page-master/page-master.component';
import { RegisterMasterComponent } from './components/register-master/register-master.component';
import { PokemonDetailsComponent } from './components/pokemon-details/pokemon-details.component';
import { PokemonEditComponent } from './components/pokemon-edit/pokemon-edit.component';
import { PokemonAddComponent } from './components/pokemon-add/pokemon-add.component';
import { AuthGuard } from './auth.guard';
import { PageTrainerComponent } from './pages/page-trainer/page-trainer.component';

const routes: Routes = [
  { path: '', component: AccueilComponent },
  { path: 'pokemons', component: PokemonsComponent },
  { path: 'pokemons/:pokedexid', component: PokemonDetailsComponent },
  { path: 'pokemons/navigate/:pokedexid', component: PokemonDetailsComponent },
  { path: 'pokemons/edit/:pokedexid', component: PokemonEditComponent },
  { path: 'pokemons/list/add', component: PokemonAddComponent },
  { path: 'personal', component: PersonalComponent },
  { path: 'login', component: LoginMasterComponent },
  { path: 'register', component: RegisterMasterComponent },
  { path: 'master', component: PageMasterComponent },
  {
    path: 'trainer/:id',
    component: PageTrainerComponent,
    canActivate: [AuthGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }

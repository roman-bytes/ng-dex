import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PokeDetailsComponent } from '../app/poke-details/poke-details.component';
import { PokedexComponent } from './pokedex/pokedex.component';

const routes: Routes = [
  {
    path: '',
    component: PokedexComponent
  },
  {
    path: 'pokemon/:id',
    component: PokeDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

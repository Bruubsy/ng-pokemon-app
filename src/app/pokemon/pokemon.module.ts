import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { BorderCardDirective } from "./border-card.directive";
import { PageNotFoundComponent } from "../page-not-found/page-not-found.component";
import { PokemonDetailComponent } from "./pokemon-detail/pokemon-detail.component";
import { PokemonListComponent } from "./pokemon-list/pokemon-list.component";
import { PokemonTypeColorPipe } from "./pokemon-type-color.pipe";
import { RouterModule, Routes } from "@angular/router";

const pokemonRoutes: Routes = [
  { path: "pokemons", component: PokemonListComponent },
  { path: "pokemon/:id", component: PokemonDetailComponent },
];

@NgModule({
  declarations: [
    BorderCardDirective,
    PokemonTypeColorPipe,
    PokemonListComponent,
    PokemonDetailComponent,
    PageNotFoundComponent,
  ],
  imports: [CommonModule, RouterModule.forChild(pokemonRoutes)],
})
export class PokemonModule {}

import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { BorderCardDirective } from "./border-card.directive";
import { PageNotFoundComponent } from "../page-not-found/page-not-found.component";
import { PokemonDetailComponent } from "./pokemon-detail/pokemon-detail.component";
import { PokemonListComponent } from "./pokemon-list/pokemon-list.component";
import { PokemonTypeColorPipe } from "./pokemon-type-color.pipe";
import { RouterModule, Routes } from "@angular/router";
import { PokemonService } from "./pokemon.service";
import { FormsModule } from "@angular/forms";
import { PokemonFormComponent } from "./pokemon-form/pokemon-form.component";
import { EditPokemonComponent } from "./edit-pokemon/edit-pokemon.component";

const pokemonRoutes: Routes = [
  { path: "pokemon/edit-pokemon/:id", component: EditPokemonComponent },
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
    PokemonFormComponent,
    EditPokemonComponent,
  ],
  imports: [CommonModule, FormsModule, RouterModule.forChild(pokemonRoutes)],
  providers: [PokemonService],
})
export class PokemonModule {}

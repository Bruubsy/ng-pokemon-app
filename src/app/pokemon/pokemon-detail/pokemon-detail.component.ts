import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Pokemon } from "../pokemon";
import { PokemonService } from "../pokemon.service";
@Component({
  selector: "app-pokemon-detail",
  templateUrl: "./pokemon-detail.component.html",
})
export class PokemonDetailComponent implements OnInit {
  pokemonList: Pokemon[];
  pokemon: Pokemon | undefined;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private pokemonService: PokemonService
  ) {}

  ngOnInit() {
    const pokemonId: string | null = this.route.snapshot.paramMap.get("id");
    if (pokemonId) {
      this.pokemon = this.pokemonService.getPokemonById(+pokemonId);
    }
  }

  goToPokemonList() {
    this.router.navigate(["/pokemons"]);
  }
  gotToEditPokemon(pokemon: Pokemon) {
    this.router.navigate(["/pokemon/edit-pokemon", pokemon.id]);
  }
}

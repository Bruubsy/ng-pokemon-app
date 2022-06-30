import { Component } from "@angular/core";

@Component({
  selector: "app-page-not-found",
  template: `
    <div class="center">
      <img
        src="http://assets.pokemon.com/assets/cms2/img/pokedex/full/129.png"
      />
      <h1>Oui, je sais gérer les pages qui n'existent pas</h1>
      <div class="card-action">
          <a routerLink="/pokemons" class="waves-effect waves-light btn">Retourner à l' accueil</a>
        </div>
    </div>
  `,
})
export class PageNotFoundComponent {}

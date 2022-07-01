import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { AuthService } from "./auth.service";

@Component({
  selector: "app-root",
  templateUrl: "app.component.html",
})
export class AppComponent {
  auth:AuthService;

  constructor(private router: Router, private authService:AuthService) {
    this.auth=this.authService;
  }
  goToLogin() {
    this.router.navigate(["/login"]);
  }

  goToPokemonList(){
    this.router.navigate(['/pokemons']);
  }
}

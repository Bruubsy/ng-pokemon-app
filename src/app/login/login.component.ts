import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { AuthService } from "../auth.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styles: [],
})
export class LoginComponent implements OnInit {
  message: string;
  name: string;
  password: string;
  auth: AuthService;

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit() {
    this.auth = this.authService;
  }

  login() {
    this.message = "Tentative de connexion";
    this.auth
      .login(this.name, this.password)
      .subscribe((isLoggedIn: boolean) => {
        if (isLoggedIn) {
          console.log("Connexion réussie");
          this.router.navigate(["/pokemons"]);
        } else {
          console.log("Connexion échouée");
          this.message = "Identifiant ou mot de passe incorrect";
          this.password = "";
          this.router.navigate(["/login"]);
        }
      });
  }
}

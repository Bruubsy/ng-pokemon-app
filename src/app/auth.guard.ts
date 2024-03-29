import { Injectable } from "@angular/core";
import { CanActivate, Router } from "@angular/router";
import { AuthService } from "./auth.service";

@Injectable({
  providedIn: "root",
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate() {
    console.log("Le guard a bien été appelé");
    if (this.authService.isLoggedIn){
      return true;
    }
    this.router.navigate(['/login']);
    return false;
  }
}

import { Component, OnInit } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { AuthService } from "./auth.service";

@Component({
    selector: "app-auth-block",
    templateUrl: "auth.component.html",
    styleUrls: ["auth.component.css"]
})
export class AuthComponent {
    public username: string = "";
    public password: string = "";
    
    constructor(private authService: AuthService) {}

    login() {
        this.authService.login(this.username, this.password);
    }

    isLoggedIn(): boolean {
        return this.authService.isLoggedIn;
    }

    getToken(): String {
        return this.authService.token;
    }

}
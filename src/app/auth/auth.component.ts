import { Component } from "@angular/core";
import { AuthService } from "./auth.service";

@Component({
    selector: "app-auth-block",
    templateUrl: "auth.component.html",
    styleUrls: ["auth.component.css"]
})
export class AuthComponent {
    public username: string = "";
    public email: string = "";
    public password: string = "";
    
    constructor(private authService: AuthService) {}

    login() {
        this.authService.login(this.username, this.password);
    }

    register() {
        this.authService.register(this.username, this.password, this.email);
    }

    switchRegistrationForm() {
        this.authService.isRegistrationFormOpened = !this.authService.isRegistrationFormOpened;
    }

    isLoggedIn(): boolean {
        return this.authService.isLoggedIn;
    }

    isRegistrationFormOpened(): boolean {
        return this.authService.isRegistrationFormOpened;
    }

    getToken(): String {
        return this.authService.token;
    }

}
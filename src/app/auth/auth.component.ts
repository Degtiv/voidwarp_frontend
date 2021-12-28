import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { AuthService } from "./auth.service";

@Component({
    selector: "app-auth-block",
    templateUrl: "auth.component.html",
    styleUrls: ["auth.component.scss"]
})
export class AuthComponent implements OnInit {
    public username: string = "";
    public email: string = "";
    public password: string = "";
    public loginFormGroup: FormGroup;
    public registerFormGroup: FormGroup;

    constructor(public authService: AuthService, private router: Router) { }

    ngOnInit() {
        this.loginFormGroup = new FormGroup({
            username: new FormControl('', [Validators.required, Validators.minLength(2)]),
            password: new FormControl(null, [Validators.required, Validators.minLength(2)])
        });

        this.registerFormGroup = new FormGroup({
            username: new FormControl('', [Validators.required, Validators.minLength(2)]),
            email: new FormControl('', [Validators.required, Validators.email]),
            password: new FormControl(null, [Validators.required, Validators.minLength(2)])
        });
    }

    login() {
        this.authService.isLoginFailed= false;
        this.authService.login(this.loginFormGroup.value.username, this.loginFormGroup.value.password);
    }

    register() {
        this.authService.register(this.registerFormGroup.value.username, this.registerFormGroup.value.password, this.registerFormGroup.value.email);
    }

    switchRegistrationForm() {
        this.authService.isLoggedIn = false;
        this.authService.isLoginFailed = false;
        this.authService.isErrorCatchedInRegistration = false;
        this.authService.isRegistrationFormOpened = !this.authService.isRegistrationFormOpened;
        if (this.authService.isRegistrationFormOpened) {
            this.authService.isRegistrationSuccessfull = false;
        }

    }

    getSwitchText(): string {
        if (this.authService.isRegistrationFormOpened) {
            return "Go to Log in"
        } 
        
        return "Go to Registration"
    }

    isLoggedIn(): boolean {
        return this.authService.isLoggedIn;
    }

    isRegistrationFormOpened(): boolean {
        return this.authService.isRegistrationFormOpened;
    }

    getToken(): string {
        return this.authService.token;
    }

    isLoginFailed(): boolean {
        return this.authService.isLoginFailed;
    }

    isRegistrationSuccesfull(): boolean {
        return this.authService.isRegistrationSuccessfull;
    }

    isErrorCatchedInRegistration(): boolean {
        return this.authService.isErrorCatchedInRegistration;
    }

    getErrorMessage(): string {
        return this.authService.errorMessage;
    }

    getErrorSolution(): string {
        return this.authService.errorSolution;
    }

    logout() {
        this.authService.logout();
    }
}
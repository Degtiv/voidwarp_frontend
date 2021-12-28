import { HttpClient, HttpErrorResponse, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, throwError } from "rxjs";
import { environment } from "../../environments/environment";

@Injectable({ providedIn: "root" })
export class AuthService {

    private loginUrl = environment.backendHost + "/login";
    private registerUrl = environment.backendHost + "/api/v1/auth/registration";
    private checkTokenUrl = environment.backendHost + "/api/v1/auth/checkToken";

    private _token: string = "";
    public isLoggedIn: boolean = false;
    public isRegistrationFormOpened: boolean = false;
    public isLoginFailed: boolean = false;
    public isRegistrationSuccessfull: boolean = false;
    public isErrorCatchedInRegistration: boolean = false;
    public errorMessage: string = "";
    public errorSolution: string = "";

    constructor(private http: HttpClient) { }

    login(username: string, password: string) {
        const loginForm = { username: username, password: password };
        const httpOptions = {
            observe: 'response' as 'response',
            headers: new HttpHeaders({ 'Content-Type': 'application/json' })
        }
        this.http.post(this.loginUrl, loginForm, httpOptions)
            .subscribe((res: any) => {
                const token = res.body.token;
                this.saveToken(token);
                this.isLoggedIn = true;
                this.isLoginFailed = false;
            }, error => {
                this.isLoggedIn = false;
                this.isLoginFailed = true;
            });
    }

    logout() {
        this.isLoggedIn = false;
        this.isLoginFailed = false;
        this.saveToken("")
    }

    register(username: string, password: string, email: string) {
        const registerForm = { username: username, password: password, email: email };
        const httpOptions = {
            observe: 'response' as 'response',
            headers: new HttpHeaders({ 'Content-Type': 'application/json' })
        }

        this.isRegistrationSuccessfull = false;

        this.http.post(this.registerUrl, registerForm, httpOptions)
            .subscribe((res: any) => {
                if (res.status === 200) {
                    this.isRegistrationFormOpened = false;
                    this.isRegistrationSuccessfull = true;
                }
            }, error => {
                this.isRegistrationFormOpened = true;
                this.isErrorCatchedInRegistration = true;
                this.errorMessage = error.error.message;
                this.errorSolution = error.error.solution;
            });
    }

    checkToken(): Observable<Object> {
        if (this._token === "") {
            this._token = localStorage.getItem("token") || "";
            if (this._token === "") {
                return throwError('Token is invalid.');
            }
        }
        const httpOptions = {
            observe: 'response' as 'response',
            headers: new HttpHeaders({ 'Content-Type': 'application/json' })
        }

        return this.http.post(this.checkTokenUrl, httpOptions);
    }

    private saveToken(newToken: string) {
        this._token = newToken
        localStorage.setItem("token", this._token);
    }

    public get token(): string {
        return this._token;
    }
}
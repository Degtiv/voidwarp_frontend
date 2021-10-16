import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "../../environments/environment";

@Injectable()
export class AuthService {

    private loginUrl = environment.backendHost + "/login";
    private registerUrl = environment.backendHost + "/api/v1/auth/registration";
    private _token = "";
    public isLoggedIn:boolean = false;
    public isRegistrationFormOpened:boolean = false;

    constructor(private http: HttpClient) { }

    login(username: string, password: string) {
        const loginForm = { username: username, password: password };
        const httpOptions = {
            observe: 'response' as 'response',
            headers: new HttpHeaders({ 'Content-Type': 'application/json' })
        }
        this.http.post(this.loginUrl, loginForm, httpOptions)
            .subscribe((res:any) => {
                const token = res.body.token;
                this.saveToken(token);
                localStorage.setItem("token", token);
                if (res.status === 200) {
                    this.isLoggedIn = true;
                } else {
                    this.isLoggedIn = false;
                }
            });
    }


    register(username: string, password: string, email: string) {
        const registerForm = { username: username, password: password, email: email};
        const httpOptions = {
            observe: 'response' as 'response',
            headers: new HttpHeaders({ 'Content-Type': 'application/json' })
        }
        this.http.post(this.registerUrl, registerForm, httpOptions)
            .subscribe((res:any) => {
                if (res.status === 200) {
                    this.isRegistrationFormOpened = false;
                } else {
                    this.isRegistrationFormOpened = true;
                }
            });
    }

    checkToken(): boolean {
        const httpOptions = {
            observe: 'response' as 'response',
            headers: new HttpHeaders({ 'Content-Type': 'application/json' })
        }

        var isStatusCodeOK = false;

        this.http.post(this.registerUrl, httpOptions)
            .subscribe((res:any) => {
                if (res.status === 200) {
                    isStatusCodeOK = true;
                } 
            });
        return isStatusCodeOK;
    }

    private saveToken(newToken: string) {
        this._token = newToken
    }

    public get token(): string {
        return this._token;
    }
}
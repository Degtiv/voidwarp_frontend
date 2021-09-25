import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders, HttpResponse } from "@angular/common/http";
import { BehaviorSubject } from "rxjs/internal/BehaviorSubject";

@Injectable()
export class AuthService {
    private url = "http://localhost:8080/login";
    private _token = "";
    public isLoggedIn:boolean = false;

    constructor(private http: HttpClient) { }

    login(username: string, password: string) {
        const credentials = { username: username, password: password };
        const httpOptions = {
            observe: 'response' as 'response',
            headers: new HttpHeaders({ 'Content-Type': 'application/json' })
        }
        this.http.post(this.url, credentials, httpOptions)
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

    private saveToken(newToken: string) {
        this._token = newToken
    }

    public get token(): string {
        return this._token;
    }
}
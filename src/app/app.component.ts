import { Component } from "@angular/core";
import { Router } from "@angular/router";

@Component({
    selector: 'voidwarp',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    isLoggedIn: boolean = false;

    constructor(public router: Router) {}
}
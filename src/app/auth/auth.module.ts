import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { NgModule, Provider } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { AuthComponent } from "./auth.component";
import { AuthInterceptor } from "./auth.interceptor";

const INTERCEPTOR_PROVIDER: Provider = {
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true
}

@NgModule({
    imports: [BrowserModule, FormsModule, HttpClientModule, ReactiveFormsModule],
    declarations: [AuthComponent],
    providers: [INTERCEPTOR_PROVIDER],
    exports: [AuthComponent]
})
export class AuthModule {}
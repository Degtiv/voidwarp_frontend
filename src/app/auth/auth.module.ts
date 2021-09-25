import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { AuthComponent } from "./auth.component";

@NgModule({
    imports: [BrowserModule, FormsModule, HttpClientModule],
    declarations: [AuthComponent],
    exports: [AuthComponent]
})
export class AuthModule {}
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { PlayerComponent } from "./player.component";

@NgModule({
    imports: [BrowserModule, FormsModule],
    declarations: [PlayerComponent],
    exports: [PlayerComponent]
})
export class PlayerModule {}
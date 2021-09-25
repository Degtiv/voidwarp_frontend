import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AuthModule } from './auth/auth.module';
import { AuthService } from './auth/auth.service';
import { CharactersListComponent } from './characters-list/characters-list.component';
import { GameSelectorComponent } from './game-selector/game-selector.component';
import { LogService } from './logging/log.service';
import { PlayerModule } from './player/player.module';
import { PlayerService } from './player/player.service';

@NgModule({
  declarations: [
    AppComponent, 
    GameSelectorComponent, 
    CharactersListComponent
  ],
  imports: [
    BrowserModule, 
    FormsModule, 
    PlayerModule, 
    HttpClientModule, 
    AuthModule
  ],
  providers: [
    PlayerService, 
    LogService, 
    AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }

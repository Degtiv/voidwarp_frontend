import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AuthModule } from './auth/auth.module';
import { AuthService } from './auth/auth.service';
import { StyleDirective } from './directives/style.directive';
import { LogService } from './logging/log.service';
import { PlayerModule } from './player/player.module';
import { PlayerService } from './player/player.service';
import { AdminComponent } from './admin/admin.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent, 
    StyleDirective,
    AdminComponent
  ],
  imports: [
    BrowserModule, 
    FormsModule, 
    PlayerModule, 
    HttpClientModule, 
    AuthModule,
    AppRoutingModule
  ],
  providers: [
    PlayerService, 
    LogService, 
    AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }

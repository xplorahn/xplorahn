import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { LogoComponent } from './components/logo/logo.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { AppRoutingModule } from './/app-routing.module';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LetraslogoComponent } from './components/letraslogo/letraslogo.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LogoComponent,
    InicioComponent,
    NavbarComponent,
    LetraslogoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

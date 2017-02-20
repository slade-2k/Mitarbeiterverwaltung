import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { MitarbeiterListeComponent } from './components/mitarbeiter-liste/mitarbeiter-liste.component';
import { MitarbeiterService } from './services/mitarbeiter.service';

import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MitarbeiterFormularComponent } from './components/mitarbeiter-formular/mitarbeiter-formular.component';

const appRoutes: Routes = [
  { path: '', component: MitarbeiterListeComponent },
  { path: 'anlegen', component: MitarbeiterFormularComponent },
  { path: 'bearbeiten/:id', component: MitarbeiterFormularComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    MitarbeiterListeComponent,
    NavbarComponent,
    MitarbeiterFormularComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [MitarbeiterService],
  bootstrap: [AppComponent]
})
export class AppModule { }

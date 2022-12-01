import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { MaisonsComponent } from './maisons/maisons.component';
import { AddMaisonComponent } from './add-maison/add-maison.component';
import { FooterComponent } from './footer/footer.component';
import { UpdateMaisonComponent } from './update-maison/update-maison.component';
import { RechercheNomComponent } from './recherche-nom/recherche-nom.component';
import { RecherceParProprietaireComponent } from './recherce-par-proprietaire/recherce-par-proprietaire.component';
import { LoginComponent } from './login/login.component';
@NgModule({
  declarations: [
    AppComponent,
    MaisonsComponent,
    AddMaisonComponent,
    FooterComponent,
    UpdateMaisonComponent,
    RechercheNomComponent,
    RecherceParProprietaireComponent,
    LoginComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

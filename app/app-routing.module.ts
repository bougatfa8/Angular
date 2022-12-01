import { LoginComponent } from './login/login.component';
import { RecherceParProprietaireComponent } from './recherce-par-proprietaire/recherce-par-proprietaire.component';
import { UpdateMaisonComponent } from './update-maison/update-maison.component';
import { FooterComponent } from './footer/footer.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MaisonsComponent } from './maisons/maisons.component';
import { AddMaisonComponent } from './add-maison/add-maison.component';
const routes: Routes = [
  {path:"maisons",component :MaisonsComponent},
  {path:"add-maison", component:AddMaisonComponent},
  {path:"",redirectTo:"maisons",pathMatch:"full"},
  {path:"footer",component:FooterComponent},
  {path:"update-maison/:id", component:UpdateMaisonComponent},
  {path:"recherche-Par-Proprietare",component:RecherceParProprietaireComponent} ,
  {path:"login-user",component :LoginComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }

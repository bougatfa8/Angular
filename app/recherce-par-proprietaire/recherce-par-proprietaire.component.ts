import { MaisonService } from './../services/maison.service';
import { Prop } from 'src/Prop.modele';
import { Maison } from 'src/Maison.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recherce-par-proprietaire',
  templateUrl: './recherce-par-proprietaire.component.html',
})
export class RecherceParProprietaireComponent implements OnInit {

  image:string="assets/home.png"
maisonV!:Maison[];
Ville: any = ['Nabeul', 'Sousse', 'Sfax', 'Hammamet','Tunis']
villeIndex!:string;
  maison! : Maison[];
  IdProp! : number;
  prop! : Prop[];
  i!:number;
  villeMaisonFiltrer ! : Maison[];
  constructor(   private   maisonService :MaisonService
    ) { 
  }

  ngOnInit(): void {
    this.AjouterProp();
    this.i=0;
        }
       AjouterProp(){
       this.maisonService.listeProps().subscribe(p => {
    console.log(p)
    this.prop = p ;
    
      }
      )
      ;
     }
      onChange() {
        this.maisonService.rechercherParProp(this.IdProp).
        subscribe(p =>{this.maison=p});
        console.log(this.maison)
        }

       

}
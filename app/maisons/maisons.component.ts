import { Prop } from 'src/Prop.modele';
import { MaisonService } from './../services/maison.service';
import { Component, OnInit } from '@angular/core';
import { Maison } from 'src/Maison.model';

@Component({
  selector: 'app-maisons',
  templateUrl: './maisons.component.html',
})
export class MaisonsComponent implements OnInit {
  maisons? :Maison[]; 
  idProp?:number;
  NomProp?:Prop[];
  image:string="assets/home.png"
  constructor(private maisonService: MaisonService) {
    
 this.maisons=[
 ]

   }

  ngOnInit(): void {
   this.AjouterMaison();
  }

  AjouterMaison(){
    this.maisonService.listeMaison().subscribe(mais => {
      console.log(mais);
      this.maisons=mais;


      console.log(this.maisons[0].prop);



    });
  }

  supprimerMaison(m: Maison)
{
let conf = confirm("Etes-vous sûr ?");
if (conf)
  this.maisonService.supprimerMaison(m.idMaison).subscribe(() => {
        console.log("Maison supprimé");
        this.AjouterMaison();

       
      
});
}

}

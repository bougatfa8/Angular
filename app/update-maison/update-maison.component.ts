import { Maison } from 'src/Maison.model';
import { Component, OnInit } from '@angular/core';
import { Prop } from 'src/Prop.modele';
import { MaisonService } from './../services/maison.service';
import { ActivatedRoute,Router } from '@angular/router';

@Component({
  selector: 'app-update-maison',
  templateUrl: './update-maison.component.html',
})
export class UpdateMaisonComponent implements OnInit {

  
  currentMaison = new Maison()
  Ville: any = ['Nabeul', 'Sousse', 'Sfax', 'Hammamet','Tunis']
  newIdProp!:number;
  nomProp?:string;
  UpdateIdProp ? :number;
  idProp?: number;
  newProp!:Prop;
  prop!:Prop[];
  constructor(
    private MaisonService: MaisonService,
    private activatedRoute: ActivatedRoute,
    private router :Router,
 ) { }
  ngOnInit(): void {


    this.MaisonService.consulterMaison(this.activatedRoute.snapshot.params['id']).subscribe
    ( mais =>{ this.currentMaison = mais;
      this.nomProp = this.currentMaison.prop.nomProp;
      this.idProp= this.currentMaison.prop.idProp;
      console.log("resultat" +this.nomProp)
    this.UpdateIdProp = this.currentMaison.prop.idProp;
    });

   
 
  }


  addMaison(){
  
      this.MaisonService.ajouterMaison(this.currentMaison)
                        .subscribe(prod => {
                        console.log(prod);
                        this.router.navigate(['maisons']);
                        }); 
      }
    
}

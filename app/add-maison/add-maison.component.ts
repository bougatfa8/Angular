import { MaisonService } from './../services/maison.service';
import { Maison } from './../../Maison.model';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Prop } from 'src/Prop.modele';
import { __values } from 'tslib';

@Component({
  selector: 'app-add-maison',
  templateUrl: './add-maison.component.html',
})
export class AddMaisonComponent implements OnInit {

  newMaison =new  Maison();
  Ville: any = ['Nabeul', 'Sousse', 'Sfax', 'Hammamet','Tunis']
  prop?: Prop[];
  idP?:number[];
  newIdProp!:number;
  newProp!:Prop;
  test!:Prop[];
  constructor(
    private MaisonService: MaisonService,
              private router : Router
  ) {


   }
  ngOnInit(): void {
this.AjouterProp();
    }
   AjouterProp(){
   this.MaisonService.listeProps().subscribe(p => {
console.log(p)
this.prop = p ;

  }
  )
  ;
 }
  


addMaison(){
  this.newMaison.prop = this.prop?.find(cat => cat.idProp == this.newIdProp)!;

    this.MaisonService.ajouterMaison(this.newMaison)
                      .subscribe(prod => {
                      console.log(prod);
                      this.router.navigate(['maisons']);
                      }); 
    }
  

  }


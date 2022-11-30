import { Injectable } from '@angular/core';
import { Maison } from 'src/Maison.model';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Prop } from 'src/Prop.modele';
import { PropWrapper } from 'src/propWrapped.model';
const httpOptions ={
  headers: new HttpHeaders({'Content-Type' : 'application/json'})
}


@Injectable({
  providedIn: 'root'
})
export class MaisonService {
  apiURL : string ='http://localhost:8082/maisons/api';
  apiURLP : string ='http://localhost:8082/maisons/api/prop';
  maisons! : Maison[];


  constructor(private http : HttpClient) {

  

   }

  listeMaison(): Observable<Maison[]>{
    return this.http.get<Maison[]>(this.apiURL);

  }

  listeProps():Observable<Prop[]>{
    return this.http.get<Prop[]>(this.apiURLP);
    }
      


  ajouterMaison(mais: Maison):Observable<Maison>{
    return this.http.post<Maison>(this.apiURL,mais,httpOptions);
  }
  
  supprimerMaison(id : any) {
    const url = `${this.apiURL}/${id}`;
    return this.http.delete(url, httpOptions);
    }

    consulterMaison(id: number): Observable<Maison> {
      const url = `${this.apiURL}/${id}`;
      return this.http.get<Maison>(url);
      }

  

      updateMaison(prod :Maison) : Observable<Maison>
        {
            return this.http.put<Maison>(this.apiURL, prod, httpOptions);
        }

     
     


rechercherParProp(idProp: number): Observable<Maison[]> {
const url = `${this.apiURL}/maisprop/${idProp}`;
return this.http.get<Maison[]>(url);
} 

rechercherParNom(nom: string):Observable< Maison[]> {
const url = `${this.apiURL}/maisonsByName/${nom}`;
return this.http.get<Maison[]>(url);
}


}


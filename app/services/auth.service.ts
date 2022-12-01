import { User } from './../../User.model';
import { Injectable } from '@angular/core';
import { Maison } from 'src/Maison.model';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

const httpOptions ={
  headers: new HttpHeaders({'Content-Type' : 'application/json'})
}


@Injectable({
  providedIn: 'root'
})
export class authService {
  apiURL : string ='http://localhost:8082/users';
token !: string;
public loggedUser!:any;
public isloggedIn : Boolean=false;
public roles!: any[];

  constructor(private http : HttpClient
    
    ,private router :Router
    ) {

  

   }
login (user: User){
    return this.http.post<User> (this.apiURL+'/login',user,{observe:'response'});
}


logout(){
    this.isloggedIn= false;
    this.loggedUser=undefined;
    this.roles = [{undefined}];
    localStorage.removeItem('loggedUser');
localStorage.setItem('isloggedIn',String(this.isloggedIn));
this.router.navigate(['/login']);
}
saveToken(jwt:string){
    localStorage.setItem('jwt',jwt);
    this.token = jwt;
    this.isloggedIn= true;
}

  }





  

 
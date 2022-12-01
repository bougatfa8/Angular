import { authService } from './../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/User.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {
user = new User();
err: number = 0;

  constructor( private authService : authService,
              private router : Router
    ) { }

  ngOnInit(): void {
  }
onLoggedin(){
  this.authService.login(this.user).subscribe({
    next:(data) => {
      let jwToken = data.headers.get('Authorization')!;
      this.authService.saveToken(jwToken);
      this.router.navigate(['/']);

    },
    error:(err : any)=>{
      this.err = 1;
    }

  })
}


}

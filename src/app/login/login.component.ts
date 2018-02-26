import { Component} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpService } from '../http.service';  
import { Http, Response } from '@angular/http';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  {

  
  mensajes = "";
  constructor(
     private route: ActivatedRoute,
     private router: Router,
     private httpS : HttpService
    ) {}

  validar(f){

    this.httpS.getUsuarios()
    .subscribe((data: Response) => {this.login = JSON.stringify(data); this.login = JSON.parse(this.login)});
      
      if (f.value.email==this.login.email  && f.value.pass==this.login.pass){
      this.router.navigate(['/main']);      

  	/*if (f.value.email=="gabioh2012@gmail.com"  && f.value.pass=="sex2004"){
  		this.router.navigate(['/main']);*/

  	
  	 }else{
  	 	this.mensajes = "Usuario o contraseña incorrectos";
  	 }
  }
  
}

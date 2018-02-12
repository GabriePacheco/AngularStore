import { Component} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  {

  
  mensajes = "";
  constructor(
     private route: ActivatedRoute,
     private router: Router
    ) {}

  validar(f){
  	if (f.value.email=="gabioh2012@gmail.com"  && f.value.pass=="sex2004"){
  		this.router.navigate(['/main']);

  	
  	 }else{
  	 	this.mensajes = "Usuario o contraseña incorrectos";
  	 }
  }
  
}

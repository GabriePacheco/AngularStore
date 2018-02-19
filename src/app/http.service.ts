import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/Rx';
@Injectable()
export class HttpService {

  constructor(private http:Http) {}
	getProductos(){
	  	return this.http.get('https://webnexu-dfce4.firebaseio.com/productos/.json')
	  	.map((response: Response) => response.json());

	  }

	}

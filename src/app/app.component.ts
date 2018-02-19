import { Component } from '@angular/core';
import { CarritoService } from './carrito.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
   providers: [CarritoService]
})
export class AppComponent {
}

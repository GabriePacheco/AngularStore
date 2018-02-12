import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ItemComponent } from './item/item.component';
import { CarritoComponent } from './carrito/carrito.component';
import { MainComponent } from './main/main.component';
import { RouterModule, Routes } from '@angular/router';
import { BarraComponent } from './barra/barra.component';
import { BuscadorComponent } from './buscador/buscador.component';
import { ProductosComponent } from './productos/productos.component';

export const appRoutes : Routes=[
  {path: "", component: LoginComponent},
  {path: "main", component: MainComponent},
  {path: "item", component: ItemComponent},
  {path: "carrito", component: CarritoComponent}
];


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ItemComponent,
    CarritoComponent,
    MainComponent,
    BarraComponent,
    BuscadorComponent,
    ProductosComponent

   
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

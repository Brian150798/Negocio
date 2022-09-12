import { Component, OnInit } from '@angular/core';
import { ProdcutosService } from './prodcutos.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.page.html',
  styleUrls: ['./productos.page.scss'],
})
export class ProductosPage implements OnInit {

  private productos =[]

  constructor(private Servicio : ProdcutosService) { }

  ngOnInit() {
    this.productos = this.Servicio.getProducto()


  }

}
export class Producto {}
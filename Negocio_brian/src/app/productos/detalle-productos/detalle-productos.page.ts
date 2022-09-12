import { Component, OnInit } from '@angular/core';
import { ProdcutosService } from '../prodcutos.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detalle-productos',
  templateUrl: './detalle-productos.page.html',
  styleUrls: ['./detalle-productos.page.scss'],
})
export class DetalleProductosPage implements OnInit {
  private datos ={}
  constructor(private Servicio: ProdcutosService, private activateRoute: ActivatedRoute) { }


  ngOnInit() {
    this.activateRoute.paramMap.subscribe( p => {
      console.log(p.get('productoID'))

      this.datos = this.Servicio.getProductosByID( p.get('productoID'))

      console.log(this.datos)
    })
  }

}

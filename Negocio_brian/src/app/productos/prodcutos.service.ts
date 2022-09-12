import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProdcutosService {

  private productos = [
    {
      id:'1',
      titulo:'leche',
      url : "https://jumbo.vtexassets.com/arquivos/ids/396671/Leche-entera-Colun-200-ml.jpg?v=637469297538830000",
      comentarios : ["Leche natural enetera","muy buena para los huesos","$500"]
    },
    {
      id:'2',
      titulo:'Arroz',
      url : "https://jumbo.vtexassets.com/arquivos/ids/395818/Arroz-grado-1-envase-degradable-2-kg.jpg?v=637469287714270000",
      comentarios : ["cereal nutritivo","muy bueno en fibra","$850"]
    },
    {
      id:'3',
      titulo:'Aceite',
      url : "https://jumbo.vtexassets.com/arquivos/ids/398096/Aceite-de-Maravilla-1-L.jpg?v=637469311120300000",
      comentarios : ["Aceite de maravilla","$2560"]
    },
    {
      id:'4',
      titulo:'Bolsa basura',
      url : "https://jumbo.vtexassets.com/arquivos/ids/428138/Bolsa-basura-mediana-10-un-70-x-90-cm-100--reciclada.jpg?v=637533151369170000",
      comentarios : ["biodegradable","$990"]
    }

  ];

  constructor() { }
  
  getProducto(){
    return[...this.productos]
  }

  addProdcutos(titulo: string, url : string, comentarios: string[]){
    this.productos.push(
      {
        id: this.productos.length + 1 + "",
        titulo: titulo,
        url: url,
        comentarios: comentarios
      }
    )


  }

  deleteProductos(productoID: string){

    this.productos = this.productos.filter( p => {
         return p.id !== productoID

    })

  }

  getProductosByID(productoID: string){
    return {
      ...this.productos.find(p => {
        return p.id == productoID
      })
    }
  }

}

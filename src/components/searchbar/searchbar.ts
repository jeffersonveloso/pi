import { HomePage } from './../../pages/home/home';
import { ProductProvider } from './../../providers/product/product';
import { Component } from '@angular/core';
@Component({
  selector: 'searchbar',
  templateUrl: 'searchbar.html'
})
export class SearchbarComponent{
  buscarProduto:string ='';
  public semSearchBar: Array<any>;
  constructor(public productProvider:ProductProvider,public home:HomePage) {
   this.filtrarProdutos();
  }
    public filtrarProdutos(){
      this.home.comFiltro = false;
      this.home.listaprodutos =  this.home.listaprodutos.filter((item) => {
           item.nomeProduto.toLowerCase().indexOf(this.buscarProduto.toLowerCase()) > -1;
      });
    }
}

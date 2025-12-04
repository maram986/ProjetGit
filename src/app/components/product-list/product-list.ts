import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/product.model';
import { ProductService} from '../../services/product';
import { CartService } from '../../services/cart';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-product-list',
  imports: [CommonModule],
  standalone: true,
  templateUrl: './product-list.html',
  styleUrl: './product-list.scss',
})
export class ProductList implements OnInit {
  products:Product[]=[];
  filteredProducts:Product[]=[];
  categories:string[]=['Tous','Homme','Femme'];
  selectedCategory:string='tous';
  constructor(
    private productService:ProductService,
    private cartService:CartService
  ){}

  ngOnInit(): void {
    this.products=this.productService.getProducts();
    this.filteredProducts=this.products;
  }

  addToCart(product:Product):void{
    this.cartService.addToCart(product);
    alert(`${product.name} ajouté au panier !`);
  }

}

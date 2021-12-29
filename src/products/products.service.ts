/*eslint-disable*/

import { Injectable, NotFoundException } from '@nestjs/common';
import { Product } from './product.model';

@Injectable()
export class ProductsService {
  private products: Product[] = [];

  insertProduct(title: string, description: string, price: number) {
    // const prodId = new Date().toString();
    const prodId = Math.random().toString();

    const newProduct = new Product(prodId, title, description, price);
    this.products.push(newProduct);
    return prodId;
  }

  getProducts() {
    //   return this.products; (objects and arrays in js are reference types, means it is a pointer which we return )

    // hence we need to return a copy of the array (because if we return directly, it will return a reference to the same object)
    return [...this.products];
  }

  getSingleProduct(productId: string) {
    const product = this.findProduct(productId)[0];
    return { ...product };
  }

  updateProduct(productId: string, title: string, desc: string, price: number) {
    const [product, index] = this.findProduct(productId);
    const updatedProduct = { ...product };
    if (title) {
      updatedProduct.title = title;
    }
    if (desc) {
      updatedProduct.description = desc;
    }
    if (price) {
      updatedProduct.price = price;
    }
    this.products[index] = updatedProduct;
  }
  deleteProduct(prodId: string) {
    const [product, index] = this.findProduct(prodId);

    this.products.splice(index, 1);
  }

  private findProduct(id: string): [Product, number] {
    const productIndex = this.products.findIndex((prod) => prod.id == id);
    const product = this.products[productIndex];
    if (!product) {
      throw new NotFoundException('Could not find Product');
    }
    return [product, productIndex];
  }
}

/*eslint-disable*/

import {
  Controller,
  Post,
  Body,
  Get,
  Param,
  Patch,
  Delete,
} from '@nestjs/common';
import { ProductsService } from './products.service';

// filter for requests starting with /products
@Controller('products')
export class ProductsController {
  // this is same as this.productsService = productsService (wer are basically creating an object of productService, which is basically a class that provides service functions like delete etc)
  constructor(private readonly productsService: ProductsService) {}
  @Post()
  addProduct(
    @Body('title') prodTitle: string, // body se title ki value utha ke prodTitle mein daal do
    @Body('description') prodDesc: string,
    @Body('price') prodPrice: number,
  ): any {
    // request mein se title nikaal ke uski value prodTitle mein daal do
    // nestjs will look at the request body, extract the value corresponding to the key title, and put its value
    // in the variable prodTitle
    // using this decorator for the paramter, we can specify which field we want to extract
    // for the moment manage the data here in the app itself

    // in case we want the complete body, then we can do the following:
    // @Body() completeBody : {title : string, description : string, price : number}

    const generatedId = this.productsService.insertProduct(
      prodTitle,
      prodDesc,
      prodPrice,
    );
    return { id: generatedId };
  }

  // if we have two methods in the same controller with the same decorator, the first one will win
  // route to /products (get request)
  @Get()
  getAllProducts() {
    return this.productsService.getProducts();
  }

  // similar to express js
  @Get(':id')
  getProduct(@Param('id') prodId: string) {
    // this syntax is the express equivalent of
    // const prodId = req.params.id;
    // same as prodId = req.params.id;
    return this.productsService.getSingleProduct(prodId);
  }

  @Patch(':id')
  updateProduct(
    @Param('id') prodId: string,
    @Body('title') prodTitle: string,
    @Body('description') prodDesc: string,
    @Body('price') prodPrice: number,
  ) {
    this.productsService.updateProduct(prodId, prodTitle, prodDesc, prodPrice);
    return null;
  }

  @Delete(':id')
  removeProduct(@Param('id') prodId: string) {
    // delelete it
    this.productsService.deleteProduct(prodId);
    return null;
  }
}

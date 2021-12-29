/*eslint-disable*/

export class Product {
  //   id: string;
  //   title: string;
  //   description: string;
  //   price: number;

  // this is a very common practice in nestjs
  //   constructor(id: string, title: string, description: string, price: number) {
  //     this.id = id;
  //     this.title = title;
  //     this.description = description;
  //     this.price = price;
  //   }

  // instead of doing the above drama, we can simply do the following, to accept all these fields

  constructor(
    public id: string,
    public title: string,
    public description: string,
    public price: number,
  ) {}
}

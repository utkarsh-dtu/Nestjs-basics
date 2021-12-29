import { Controller, Get, Header } from '@nestjs/common';
import { AppService } from './app.service';

// Controllers handle incoming request and send response
// your_domain.com/  (this is the route in case we dont pass any argument to this controller)

// is we pass 'products' it will get into this controller
// we can pass a fitler to this controller, to filter out the requests , for example if we pass 'products', then requests starting with products will reach this controller

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  // if we pass 'users' here, then requests with 'users' will get into this function
  // @Get()
  // getHello(): string {
  //   return this.appService.getHello(); //just return the body of the response
  //   // nestjs looks at what we are returning, and sets the headers itself
  // }

  // using decorators, we can set headers as well using decorators
  @Get()
  @Header('Content-Type', 'text/html')
  getHello(): { name: string; age: number } {
    return { name: 'max', age: 34 };
  }
}

import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  getHelloById(id: number): string {
    return `Get hello by ID ${id}`;
  }
}

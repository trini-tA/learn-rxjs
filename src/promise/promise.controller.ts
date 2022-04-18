import { Controller, Get } from '@nestjs/common';
import { PromiseService } from './promise.service';

@Controller('promise')
export class PromiseController {
  constructor(private readonly promiseService: PromiseService) {}

  @Get('')
  getBasic() {
    return this.promiseService.transformToUpper('hello world !');
  }

  @Get('empty')
  getEmpty() {
    return this.promiseService.transformToUpper('');
  }

  @Get('user')
  getUser() {
    return this.promiseService.displayUser(1);
  }

  @Get('chain')
  getChain() {
    const data = {
      id: 1,
      messages: [
        { title: 'message 1' },
        { title: 'message 2' },
        { title: 'message 3' },
        { title: 'message 4' },
      ],
      chain: null,
    };

    return this.promiseService.transfromToUpperString(data);
  }
}

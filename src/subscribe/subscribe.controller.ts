import { Controller, Get } from '@nestjs/common';
import { SubscribeService } from './subscribe.service';

@Controller('subscribe')
export class SubscribeController {
  constructor(private readonly subscribeService: SubscribeService) {}

  @Get()
  homeSubscribe() {
    return this.subscribeService.getHome();
  }
}

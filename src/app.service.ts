import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  urls(): any {
    return {
      home: '/',
      promise: {
        home: '/',
        empty: '/empty',
        user: '/user',
        chain: '/chain',
      },
      subscribe: {
        home: '/',
      },
    };
  }
}

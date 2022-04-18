import { Injectable } from '@nestjs/common';
import { Observable, Subscriber } from 'rxjs';

@Injectable()
export class SubscribeService {
  getHome() {
    return this._test();
    /*this.randomNumberGenerator.subscribe((value) => {
      console.log(value);
    });*/
  }

  protected _test() {
    const randomNumberGenerator = Observable.create(function (observer) {
      setTimeout(function () {
        const randomNumber = Math.floor(Math.random() * 100);

        if (randomNumber == 13) {
          observer.error('Incorrect Random Number Generated');
        } else if (randomNumber == 99) {
          observer.complete();
        } else {
          observer.next(randomNumber);
        }
      }, 1000);
    });

    return randomNumberGenerator.subscribe({
      next: function (data) {
        console.log('Input Data is: ' + data);
      },
      error: function (errorMessage) {
        console.log(
          'Recieved the error with following message: ' + errorMessage,
        );
      },
      complete: function () {
        console.log('Observable has completed Execution');
      },
    });
  }

  protected getHomeMessage(): Observable<any> {
    //return 'Home for Subscribe !!!';

    return Observable.create((observer) => {
      observer.next();
      observer.error();
      observer.complete();
    });
  }
}

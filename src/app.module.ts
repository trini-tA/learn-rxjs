import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SubscribeController } from './subscribe/subscribe.controller';
import { PromiseController } from './promise/promise.controller';
import { PromiseService } from './promise/promise.service';
import { SubscribeService } from './subscribe/subscribe.service';
import { MeasureController } from './measure/measure.controller';
import { MeasureService } from './measure/measure.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { Learn, LearnSchema } from './schemas/learn.schema';
import { DatabaseController } from './database/database.controller';
import { DatabaseService } from './database/database.service';
import configuration from './config/configuration';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [configuration],
    }),
    MongooseModule.forRoot(
      //'mongodb://<database.user>:<database.password>@<database.host>:<database.port>/<database.name>',
      'mongodb://root:example@localhost:27017',
    ),
    MongooseModule.forFeature([{ name: Learn.name, schema: LearnSchema }]),
  ],
  controllers: [
    AppController,
    SubscribeController,
    PromiseController,
    MeasureController,
    DatabaseController,
  ],
  providers: [
    AppService,
    PromiseService,
    SubscribeService,
    MeasureService,
    DatabaseService,
  ],
})
export class AppModule {}

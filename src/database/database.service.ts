import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Learn, LearnDocument, LearnSchema } from '../schemas/learn.schema';
//import { CreateCatDto } from './dto/create-cat.dto';

@Injectable()
export class DatabaseService {
  constructor(
    @InjectModel(Learn.name) private learnModel: Model<LearnDocument>,
  ) {}

  migrate(): string {
    return 'Migrate';
  }

  seeder(): Promise<Learn> {
    const seeder = new this.learnModel({
      name: 'titi',
      value: 310,
      type: '666-666-6666',
    });
    return seeder.save();
    //return 'Seeder';
  }

  async findAll(): Promise<Learn[]> {
    const learns = await this.learnModel.find().exec();

    learns.map((learn) => {
      console.log(learn);
    });

    return learns;
  }
}

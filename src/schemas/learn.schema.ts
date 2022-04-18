import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type LearnDocument = Learn & Document;

@Schema()
export class Learn {
  @Prop()
  name: string;

  @Prop()
  value: number;

  @Prop()
  type: string;
}

export const LearnSchema = SchemaFactory.createForClass(Learn);

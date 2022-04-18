import { Controller, Get } from '@nestjs/common';
import { DatabaseService } from './database.service';

@Controller('database')
export class DatabaseController {
  constructor(private readonly databaseService: DatabaseService) {}

  @Get()
  datatabeHome() {
    return 'TODO:: list cmd';
  }

  @Get('migrate')
  datatabeMigrate() {
    return this.databaseService.migrate();
  }

  @Get('seeder')
  databaseSeeder() {
    return this.databaseService.seeder();
  }

  @Get('index')
  databaseIndex() {
    return this.databaseService.findAll();
  }
}

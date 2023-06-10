import { DatabaseModule } from './modules/database.module';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CarModule } from './modules/car.module';

@Module({
  imports: [DatabaseModule, CarModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

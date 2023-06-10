import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Car } from "../models/car.model"

@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'sap-20',
      database: 'autoru',
      autoLoadModels: true,
      synchronize: true,
    }),
    SequelizeModule.forFeature([Car]),
  ],
})
export class DatabaseModule {}
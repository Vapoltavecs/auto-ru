import { Car } from './../models/car.model';
import { SequelizeModule } from '@nestjs/sequelize';
import { CarService } from '../services/car.service';
import { CarController } from '../controllers/car.controller';
import { Module } from "@nestjs/common";

@Module({
    imports: [SequelizeModule.forFeature([Car])],
    controllers: [CarController],
    providers: [CarService]
})
export class CarModule { }
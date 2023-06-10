import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { Car, ICar } from "../models/car.model"

@Injectable()
export class CarService {
    constructor(
        @InjectModel(Car)
        private carModel: typeof Car
    ) { }

    async create(car: ICar): Promise<Car> {
        return this.carModel.create(car)
    }

    async getAll():Promise<Car[]>{
        return this.carModel.findAll()
    }
}

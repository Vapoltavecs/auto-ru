import { CarService } from './../services/car.service';
import { Controller, Get, Param, Query } from '@nestjs/common';

@Controller("cars")
export class CarController {
    constructor(private carService: CarService) { }
    @Get("/all")
    getAll() {
        return this.carService.getAll()
    }
    @Get("/create")
    create(@Query() {name}: {name: string}) {
        return this.carService.create({ name, description: "dsfoifhjsd", year: "dsoujhf", number: "diskjf", status: "osdfsd", mileage: 1333, body: "sdfsdfsdfsd", color: "black", engine: "dsfsdfsf", tax: "sdfsdfsd", transmission: "sdfsdfsdsd", drive: "dasfsdfsd", owners: 2, rudder: "dasfsdf", own_time: "1 year", state: "dsfsd", pts: "sdfsdfds", customs: "dsfsd", price: 100000 })
    }
}
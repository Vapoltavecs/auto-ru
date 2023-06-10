import { Column, Model, Table } from "sequelize-typescript";


export interface ICar {
    name: string
    description: string,
    year: string,
    number: string,
    status: string,
    mileage: number,
    body: string,
    color: string,
    engine: string,
    tax: string,
    transmission: string,
    drive: string,
    rudder: string,
    state: string,
    owners: number,
    pts: string,
    own_time: string,
    customs: string,
    price: number
}

@Table
export class Car extends Model<ICar> {
    @Column
    name: string;

    @Column
    description: string;

    @Column
    year: string;

    @Column
    number: string;

    @Column
    status: string;

    @Column
    milage: number
}
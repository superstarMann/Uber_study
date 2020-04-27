import { Entity, BaseEntity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, ManyToOne } from "typeorm";
import { RideStatus } from "../types/types";
import User from "./User";

@Entity()
class Ride extends BaseEntity{

    @PrimaryGeneratedColumn()
    id: number;

    @Column({type: "text", enum:["ACCEPTED", "FINISHED", "CANCELED", "REQUESTING", "ONROUTE"]})
    status: RideStatus;

    @Column({type: "text"})
    pickUpAdress: string;
 
    @Column({type: "double precision", default: 0})
    pickUpLat: number;

    @Column({type: "double precision", default: 0})
    pickUpLng: number;

    @Column({type: "text"})
    dropOffAdress: string;

    @Column({type: "double precision", default: 0})
    dropOffLat: number;

    @Column({type: "double precision", default: 0})
    dropOffLng: number;

    @Column({type: "double precision", default: 0})
    price: number;

    @Column({type: "text"})
    distance: string;
    
    @Column({type: "text"})
    duration: string;

    @CreateDateColumn()
    createAt: string;

    @UpdateDateColumn()
    updateAt: string;

    @ManyToOne(type => User, user => user.ridesAsPassenger)
    passenger: User;

    @ManyToOne(type => User, user => user.ridesAsDriver)
    driver: User;

}

export default Ride;
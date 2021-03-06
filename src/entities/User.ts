import bcrypt, { hash } from "bcrypt";
import {IsEmail} from "class-validator"
import { BaseEntity, Column,Entity, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, BeforeInsert, BeforeUpdate, OneToMany, ManyToMany, ManyToOne, Driver } from "typeorm";
import Message from "./Message";
import Chat from "./Chat";
import Verification from "./Verification";
import Ride from "./Ride";

const BCRYPT_ROUNDS = 20;

@Entity()

class User extends BaseEntity {
    @PrimaryGeneratedColumn() 
    id: number;
    
    @Column({type:"text", nullable: true})
    password: string;

    @Column({type: "text"})
    firstName: string;

    @Column({type: "text"})
    lastName: string;

    get FullName(): string{
    return `${this.firstName} ${this.lastName}`;
    }
      
    @Column({type: "text", nullable: true})
    @IsEmail()
    email: string | null ;

    @Column({type: "boolean", default: false})
    verifiedEmail: boolean;
    
    @Column({type: "text", nullable: true})
    phoneNumber: string;

    @Column({type: "boolean", default: false})
    verifiedPhoneNumber: boolean;

    @Column({type:"int", nullable: true})
    age: number;

    @Column({type:"text"})
    profilePhoto: string;

    @Column({type: "boolean", default: false})
    isDriving: boolean;

    @Column({type: "boolean", default: false})
    isRiding: boolean;

    @Column({type: "boolean", default: false})
    isTaken: boolean;
    
    @Column({type: "double precision", default: 0})
    lastLongitude: number; //경도
    
    @Column({type:"double precision", default: 0})
    lastLatitude: number; //lastLatitude: 위도

    @Column({type: "double precision", default: 0})
    lastOrientation: number; //방향

    @ManyToOne(type => Chat, chat => chat.participants)
    chat: Chat;

    @OneToMany(type => Message, message => message.user)
    messages: Message[];

    @OneToMany(type => Verification, verification => verification.user)
    verifications: Verification[];

    @OneToMany(type => Ride, ride => ride.passenger)
    ridesAsPassenger: Ride[];

    @OneToMany(type => Ride, ride => ride.driver)
    ridesAsDriver: Driver[];

    @Column({type: "text",nullable: true })
    fbId: string;
    

    @CreateDateColumn() 
    createAt: string;

    @UpdateDateColumn()
    updateAt: string;  

    public comparepassword(password:string) : Promise<boolean>{
       return bcrypt.compare(password, this.password);
    }

    @BeforeInsert()
    @BeforeUpdate()
    async savePassword(): Promise<void> {
        if(this.password) {
            const hashedPassword = await this.hashPassword(this.password);
            this.password = hashedPassword;
        }
    }
    private hashPassword(password: string): Promise<string> {
        return bcrypt.hash(password, BCRYPT_ROUNDS);
      }
}

export default User;
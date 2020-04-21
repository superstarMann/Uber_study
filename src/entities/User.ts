import {IsEmail} from "class-validator"
import {  BaseEntity, Column,Entity, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from "typeorm"

@Entity()

class User extends BaseEntity {
    @PrimaryGeneratedColumn() 
    id: number;
    
    @Column({type: "text"})
    firstName: string;

    @Column({type: "text"})
    LastName: string;

    get FullName(): string{
        return `${this.firstName} ${this.LastName}`;
    }
      
    @Column({type: "text", unique: true})
    @IsEmail()
    Email: string;

    @Column({type: "boolean", default: false})
    verifiedEmail: boolean;
    
    @Column({type: "text"})
    PhoneNumber: string;

    @Column({type: "boolean", default: false})
    verifiedPhoneNumber: boolean;

    @Column({type:"int"})
    age: number;

    @Column({type:"text"})
    ProfilePhoto: string;

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

    @CreateDateColumn() 
    CreateAt: string;

    @UpdateDateColumn()
    UpdateAt: string;
}

export default User;
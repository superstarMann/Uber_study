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

    @CreateDateColumn() 
    CreateAt: string;

    @UpdateDateColumn()
    UpdateAt: string;
}

export default User;
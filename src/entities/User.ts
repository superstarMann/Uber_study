import bcrypt, { hash } from "bcrypt";
import {IsEmail} from "class-validator"
import { BaseEntity, Column,Entity, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, BeforeInsert, BeforeUpdate, OneToMany, ManyToMany, ManyToOne } from "typeorm";
import Message from "./Message";
import Chat from "./Chat";

const BCRYPT_ROUNDS = 20;

@Entity()

class User extends BaseEntity {
    @PrimaryGeneratedColumn() 
    id: number;
    
    @Column({type:"text"})
    password: string;

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

    @ManyToOne(type => Chat, chat => chat.participants)
    chat: Chat;

    @OneToMany(type => Message, message => message.user)
    messages: Message[];


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
import { Entity, BaseEntity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, BeforeInsert, ManyToOne } from "typeorm";
import { VerificationTarget } from "../types/types";
import User from "./User";

const PHONE = "PHONE";
const EMAIL = "EMAIL";

@Entity()
class Verification extends BaseEntity{
   @PrimaryGeneratedColumn()
   id: number;

   @Column({type: "text", enum: ["PHONE", "EMAIL"] })
   target: VerificationTarget; // target => phone || password      `|| = or `

   @Column({type: "text"})
   payload: string;   // phonenumber: ex) +01051741436

   @Column({type: "text"})
   key: string;   // password ex)1234

   @Column({type: "boolean", default: false})
   used: boolean;

   @ManyToOne(type => User, user => user.verifications)
   user: User;
 
   @CreateDateColumn() createAt: string;
   @UpdateDateColumn() updateAt: string;

   @BeforeInsert()
   createKey() : void {
       if(this.target === PHONE){
            this.key = Math.floor(Math.random() * 100000).toString(); //비번은 4자가 국룰이니깐 나중에 4자로 변환
       }else if(this.target === EMAIL){
            this.key = Math.random().toString(36).substr(2);
       }
   }

}

export default Verification;
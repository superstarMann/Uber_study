import { Entity, PrimaryColumn, BaseEntity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from "typeorm";

@Entity()
class Verification extends BaseEntity{
   @PrimaryGeneratedColumn()
   id: number;

   @Column({type: "text"})
   targent: string; // target => phone

   @Column({type: "text"})
   payload: string;   // phonenumber: ex) +01051741436

   @Column({type: "text"})
   key: string;   // password ex)1234

   @Column({type: "boolean", default: false})
   used: boolean  
 
   @CreateDateColumn() createAt: string;
   @UpdateDateColumn() updateAt: string;

}

export default Verification;
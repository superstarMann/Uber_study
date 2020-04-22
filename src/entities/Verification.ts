import { Entity, PrimaryColumn, BaseEntity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from "typeorm";

@Entity()
class Verification extends BaseEntity{
   @PrimaryGeneratedColumn()
   id: number;

   @Column({type: "text"})
   targent: string;

   @Column({type: "text"})
   payload: string;

   @Column({type: "text"})
   key: string;

   @Column({type: "boolean", default: false})
   used: boolean

   @CreateDateColumn() createAt: string;
   @UpdateDateColumn() updateAt: string;

}

export default Verification
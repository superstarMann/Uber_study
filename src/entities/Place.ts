import { Entity, BaseEntity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn} from "typeorm";


const PHONE = "PHONE";
const EMAIL = "EMAIL";

@Entity()
class Place extends BaseEntity{
   @PrimaryGeneratedColumn()
   id: number;

   @Column({type: "text"})
   name: string;

   @Column({type: "double precision", default: 0})
   lat: number;
  
   @Column({type: "double precision", default: 0})
   lng: number;

   @Column({type: "text"})
   adress: string;

   @Column({type: "boolean", default: false})
   isFav: boolean; //좋아하는 장소


   @CreateDateColumn() createAt: string;
   @UpdateDateColumn() updateAt: string;

}

export default Place;
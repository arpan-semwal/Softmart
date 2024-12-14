import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class School {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  email: string;

  @Column()
  schoolName: string;

  @Column()
  schoolCity: string;

  @Column()
  schoolState: string;

  @Column()
  schoolMobile: string;
  
  
}

export default School;

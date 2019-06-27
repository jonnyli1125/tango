import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Field {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  label: string;

  @Column()
  value: string;

  @Column()
  isAnswer: boolean;
}

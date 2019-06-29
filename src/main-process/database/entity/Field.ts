import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Field {
  @PrimaryGeneratedColumn()
  public id: number;

  @Column()
  public label: string;

  @Column()
  public value: string;

  @Column()
  public isAnswer: boolean;
}

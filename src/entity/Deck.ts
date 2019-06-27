import { Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Card } from "./Card";

@Entity()
export class Deck {
  @PrimaryGeneratedColumn()
  public id: number;

  @OneToMany(type => Card, card => card.deck)
  public cards: Card[];
}

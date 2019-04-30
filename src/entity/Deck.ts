import { Entity, PrimaryGeneratedColumn, OneToMany } from "typeorm";
import { Card } from './Card';

@Entity()
export class Deck {
  @PrimaryGeneratedColumn()
  id: number;

  @OneToMany(type => Card, card => card.deck)
  cards: Card[];
}

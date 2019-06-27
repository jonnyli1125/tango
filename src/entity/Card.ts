import {
  Entity,
  PrimaryGeneratedColumn,
  ManyToMany,
  JoinTable,
  ManyToOne
} from "typeorm";
import { Field } from "./Field";
import { Deck } from "./Deck";
import { Validate } from "class-validator";
import { UniqueAnswerField } from "../validator/UniqueAnswerField";

@Entity()
export class Card {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToMany(type => Field)
  @JoinTable()
  @Validate(UniqueAnswerField, {
    message: "Card can have only one answer field!"
  })
  fields: Field[];

  @ManyToOne(type => Deck, deck => deck.cards)
  deck: Deck;
}

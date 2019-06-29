import { Validate } from "class-validator";
import {
  Entity,
  JoinTable,
  ManyToMany,
  ManyToOne,
  PrimaryGeneratedColumn
} from "typeorm";
import { UniqueAnswerField } from "../validator/UniqueAnswerField";
import { Deck } from "./Deck";
import { Field } from "./Field";

@Entity()
export class Card {
  @PrimaryGeneratedColumn()
  public id: number;

  @ManyToMany(type => Field)
  @JoinTable()
  @Validate(UniqueAnswerField, {
    message: "Card can have only one answer field!"
  })
  public fields: Field[];

  @ManyToOne(type => Deck, deck => deck.cards)
  public deck: Deck;
}

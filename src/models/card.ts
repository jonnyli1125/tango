/**
 * SRS Card unit.
 */
export class Card {
  /**
   * Create an instance of a card.
   *
   * @param id The database id for this card
   * @param fields The fields (mapped label => value) of the card
   * @param answerKey The key to this.fields that is the answer of this card
   */
  constructor(
    public readonly id: number,
    public readonly fields: { [label:string]: string; },
    public readonly answerKey: string
  ) {}
}

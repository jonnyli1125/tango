import { Card } from './card'

/**
 * Deck that contains collection of cards.
 */
export class Deck {
  /**
   * Create an instance of a deck.
   *
   * @param id The database id for this card
   * @param cards Collection of cards.
   */
  constructor(
    public readonly id: number,
    public readonly cards: Card[]
  ) {}
}

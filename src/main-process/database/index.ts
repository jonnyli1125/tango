import * as path from "path";
import "reflect-metadata";
import { createConnection } from "typeorm";

import { Card } from "./entity/Card";
import { Deck } from "./entity/Deck";
import { Field } from "./entity/Field";

const SQLITE_DATABASE = path.resolve(__dirname, "./tango.sqlite");

export async function openDatabase() {
  const connection = await createConnection({
    database: SQLITE_DATABASE,
    entities: [Card, Deck, Field],
    logging: true,
    synchronize: true,
    type: "sqlite"
  });

  const newField = new Field();
  newField.label = "hiragana";
  newField.value = "ひらがな";
  newField.isAnswer = true;
  await connection.manager.save(newField);

  return connection;
}

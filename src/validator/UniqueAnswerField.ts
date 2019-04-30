import { ValidationArguments, ValidatorConstraint, ValidatorConstraintInterface } from 'class-validator';
import { Field } from "../entity/Field";

@ValidatorConstraint({ name: "uniqueAnswerField", async: false })
export class UniqueAnswerField implements ValidatorConstraintInterface {
  validate(fields: Field[], args: ValidationArguments) {
    let answerFields = 0;
    for (let field of fields) {
      if (field.isAnswer) {
        answerFields++;
        if (answerFields > 1) return false;
      }
    }
    return true;
  }

  defaultMessage(args: ValidationArguments) {
    return "Collection of fields can only have one answer field!";
  }
}

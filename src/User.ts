import Required from "./decorators/RequiredDecorator";
import Validate from "./decorators/ValidateDecorator";

export default class User {
  constructor(id: number, name: string) {
    this.id = id;
    this.name = name;
  }

  id: number;
  name: string;

  @Validate
  changeName(@Required newName: string) {
    this.name = newName;
  }
}

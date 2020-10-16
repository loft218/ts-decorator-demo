import "reflect-metadata";
import { VALIDATE_REQUIRED_KEY } from "./Constant";

const Required = (target: any, propertyKey: string, parameterIndex: number) => {
  console.log("-> @Required");
  const rules =
    Reflect.getMetadata(VALIDATE_REQUIRED_KEY, target, propertyKey) || [];
  rules.push(parameterIndex);
  Reflect.defineMetadata(VALIDATE_REQUIRED_KEY, rules, target, propertyKey);
};

export default Required;

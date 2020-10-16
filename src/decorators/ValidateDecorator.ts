import "reflect-metadata";
import { VALIDATE_REQUIRED_KEY } from "./Constant";

const Validate = (
  target: any,
  propertyKey: string,
  descriptor: PropertyDescriptor
) => {
  console.log("-> @Validate");
  let _method = descriptor.value;
  descriptor.value = function () {
    console.log("-> @Validate -> descriptor.value");
    let args = arguments;

    const rules = Reflect.getMetadata(
      VALIDATE_REQUIRED_KEY,
      target,
      propertyKey
    ) as Array<number>;

    if (rules && rules.length) {
      rules.forEach((parameterIndex) => {
        if (!args[parameterIndex])
          throw Error(
            `${target.constructor.name}.${propertyKey} ,arguments ${parameterIndex} is invalid`
          );
      });
    }
    return _method.apply(this, arguments);
  };
};

export default Validate;

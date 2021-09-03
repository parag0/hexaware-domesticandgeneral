import { IArgument, IOutput } from "../interface";

export default class Logic implements IArgument {
  argument: string;
  output: IOutput = {};

  constructor(input: string) {
    this.argument = this.sanitizeInput(input);
  }

  sanitizeInput(str: string): string {
    return str.replace(/[^A-Z0-9]/gi, "");
  }

  duplicateCharCount(): IOutput {
    if (this.argument.length > 0) {
      for (const char of this.argument) {
        this.output[char] = (this.output[char] || 0) + 1;
      }

      this.output = Object.keys(this.output)
        .filter((char) => this.output[char] > 1)
        .reduce(
          (res: IOutput, key) => ((res[key] = this.output[key]), res),
          {}
        );
    }
    return this.output;
  }
}

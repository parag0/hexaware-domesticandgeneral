import { IOutput } from "./index";

interface IArgument {
  argument: string;
  output: IOutput;
  duplicateCharCount(): IOutput;
  sanitizeInput(str: string): string;
}

export { IArgument };

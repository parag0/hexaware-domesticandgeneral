import Logic from "../src/lib/Logic";
import { IOutput } from "../src/interface";

describe("Logic", () => {
  let instance: Logic;

  beforeEach(() => {
    instance = new Logic("test");
  });

  it("should get an instance of Logic class", async () => {
    expect(instance).toBeInstanceOf(Logic);
  });

  it("should receive an empty object", async () => {
    instance = new Logic("");
    const obj: IOutput = instance.duplicateCharCount();
    expect(obj).toMatchObject({});
  });

  it("should sanitize special characters", async () => {
    const input: string = instance.sanitizeInput("hello^%$*&(world");
    expect(/^[^a-zA-Z0-9]+$/.test(input)).toBeFalsy();
  });

  it("should equal to", async () => {
    const obj: IOutput = instance.duplicateCharCount();
    expect(obj).toStrictEqual({ t: 2 });
  });
});

import strictEquals from "..";

describe("Given the strictEquals function", () => {
  describe("When it recives a 1 and a 1", () => {
    test("Then it should return true", () => {
      const valueA = 1;
      const valueB = 1;

      const isSameValue = strictEquals(valueA, valueB);

      expect(isSameValue).toBeTruthy();
    });
  });

  describe("When it recives a NaN and a NaN", () => {
    test("Then it should return false", () => {
      const valueA = NaN;
      const valueB = NaN;

      const isSameValue = strictEquals(valueA, valueB);

      expect(isSameValue).toBeFalsy();
    });
  });

  describe("When it recives a 0 and -0 or -0 and 0", () => {
    test("Then it should return true", () => {
      const valueA = 0;
      const valueB = -0;

      const isSameValue = strictEquals(valueA, valueB);

      expect(isSameValue).toBeTruthy();
    });
  });

  describe("When it recives a 1 and '1'", () => {
    test("Then it should return false", () => {
      const valueA = 1;
      const valueB = "1";

      const isSameValue = strictEquals(valueA, valueB);

      expect(isSameValue).toBeFalsy();
    });
  });

  describe("When it recives a true and false", () => {
    test("Then it should return false", () => {
      const valueA = true;
      const valueB = false;

      const isSameValue = strictEquals(valueA, valueB);

      expect(isSameValue).toBeFalsy();
    });
  });

  describe("When it recives a false and false", () => {
    test("Then it should return true", () => {
      const valueA = false;
      const valueB = false;

      const isSameValue = strictEquals(valueA, valueB);

      expect(isSameValue).toBeTruthy();
    });
  });

  describe("When it recives a 'Water' and 'oil'", () => {
    test("Then it should return true", () => {
      const valueA = "Water";
      const valueB = "oil";

      const isSameValue = strictEquals(valueA, valueB);

      expect(isSameValue).toBeFalsy();
    });
  });
});

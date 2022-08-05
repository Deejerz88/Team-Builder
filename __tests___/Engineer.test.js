const Engineer = require("../lib/Engineer.js");

describe("Engineer", () => {
  describe("Engineer constructor", () => {
    it("should create a new Engineer and return the its properties", () => {
      const engineer = new Engineer(
        "DJ",
        "123",
        "DJ@email.com",
        "Pretty Cool",
        "lib/Manager.js",
        "DJ123"
      );
      expect(engineer.getName()).toEqual("DJ");
      expect(engineer.getEmail()).toEqual("DJ@email.com");
      expect(engineer.getId()).toEqual("123");
      expect(engineer.getDesc()).toEqual("Pretty Cool");
      expect(engineer.getPic()).toEqual("lib/Manager.js");
      expect(engineer.getGithub()).toEqual("DJ123");
    });
  });
  describe("Card Creator", () => {
    it("should create a new card", () => {
      const engineer = new Engineer();
      expect(engineer.createCard().split(" ")[0]).toEqual("<div");
    });
  });
});

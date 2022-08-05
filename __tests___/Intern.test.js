const Intern = require("../lib/Intern.js");

describe("Intern", () => {
  describe("Intern constructor", () => {
    it("should create a new Intern and return the its properties", () => {
      const intern = new Intern(
        "DJ",
        "123",
        "DJ@email.com",
        "Pretty Cool",
        "lib/Manager.js",
        "MSU"
      );
      expect(intern.getName()).toEqual("DJ");
      expect(intern.getEmail()).toEqual("DJ@email.com");
      expect(intern.getId()).toEqual("123");
      expect(intern.getDesc()).toEqual("Pretty Cool");
      expect(intern.getPic()).toEqual("lib/Manager.js");
      expect(intern.getSchool()).toEqual("MSU");
    });
  });
  describe("Card Creator", () => {
    it("should create a new card", () => {
      const intern = new Intern();
      expect(intern.createCard().split(" ")[0]).toEqual("<div");
    });
  });
});

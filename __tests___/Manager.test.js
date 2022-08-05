const Manager = require("../lib/Manager.js");

describe("Manager", () => {
  describe("Manager constructor", () => {
    it("should create a new Manager and return the its properties", () => {
      const manager = new Manager(
        "DJ",
        "123",
        "DJ@email.com",
        "Pretty Cool",
        "lib/Manager.js",
        "987"
      );
      expect(manager.getName()).toEqual("DJ");
      expect(manager.getEmail()).toEqual("DJ@email.com");
      expect(manager.getId()).toEqual("123");
      expect(manager.getDesc()).toEqual("Pretty Cool");
      expect(manager.getPic()).toEqual("lib/Manager.js");
      expect(manager.getOfficeNumber()).toEqual("987");
    });
  });
  describe("Card Creator", () => {
    it("should create a new card", () => {
      const manager = new Manager();
      expect(manager.createCard().split(" ")[0]).toEqual("<div");
    });
  });
});

const Employee = require("../lib/Employee.js");

describe("Employee", () => {
  describe("Employee constructor", () => {
    it("should create a new employee and return the its properties", () => {
      const employee = new Employee(
        "DJ",
        "123",
        "DJ@email.com",
        "Pretty Cool",
        "lib/Manager.js"
      );
      expect(employee.getName()).toEqual("DJ");
      expect(employee.getEmail()).toEqual("DJ@email.com");
      expect(employee.getId()).toEqual("123");
      expect(employee.getDesc()).toEqual("Pretty Cool");
      expect(employee.getPic()).toEqual("lib/Manager.js");
    });
  });
  describe("Card Creator", () => {
    it("should create a new card", () => {
      const employee = new Employee();
      expect(employee.createCard().split(" ")[0]).toEqual("<div");
    });
  });
});

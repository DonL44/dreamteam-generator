const Engineer = require("../lib/Engineer");

test("Can create a github.", () => {
    const testGithub = "DKSchrute";
    const employeeInstance = new Engineer("Dwight Schrute", 2, "Dwight.Schrute@test.com", testGithub);
    expect(employeeInstance.github).toBe(testGithub);
});

test("Testing getGithub will return github.", () => {
    const testGithub = "DKSchrute";
    const employeeInstance = new Engineer("Dwight Schrute", 2, "Dwight.Schrute@test.com", testGithub);
    expect(employeeInstance.getGithub()).toBe(testGithub);
});

test("Testing role.", () => {
    const returnValue = "Engineer";
    const employeeInstance = new Engineer("Dwight Schrute", 2, "Dwight.Schrute@test.com", "DKSchrute");
    expect(employeeInstance.getRole()).toBe(returnValue);
});
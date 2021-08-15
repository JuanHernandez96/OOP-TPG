const Employee = require('../lib/Employee');

test("can set name", () => {
    const name = 'jason'
    const employee = new Employee(name)

    expect(employee.name).toBe(name)
});


test("can get name via getName", () => {
    const name = 'Matt'
    const employee = new Employee(name)

    expect(employee.getName()).toBe(name)
});

test("can get email via getEmail", () => {
    const email = 'mattattack@gmail.com'
    const employee = new Employee('name', email)

    expect(employee.getEmail()).toBe(email)
});

test("can get id via getId", () => {  
    const id = '1'
    const employee = new Employee('name', 'email', id)

    expect(employee.getId()).toBe(id)
});

test("can get role via getRoles", () => {
    const employee = new Employee('name', 'email', '4' )

    expect(employee.getRole()).toBe('Employee')
});
const Manager = require('../lib/Manager');

test('can get officeNumber', () => {
    const officeNumber = '426'
    const manager = new Manager('name', 'email', 'id', officeNumber)

    expect(manager.officeNumber).toBe(officeNumber)
});

test('get officeNumber via getOfficeNumber()', () => {
    const officeNumber = '426'
    const manager = new Manager('name', 'email', 'id', officeNumber)

    expect(manager.getOfficeNumber()).toBe(officeNumber)
});

test('get role via getRole', () => {
    const manager = new Manager('name', 'email', 'id', '426')

    expect(manager.getRole()).toBe('Manager')
});
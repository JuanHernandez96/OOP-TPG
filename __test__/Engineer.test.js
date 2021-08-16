const Engineer = require('../lib/Engineer');

test('get github username', () => {
    const gitHub = 'John400'
    const engineer = new Engineer('name', 'email', 'id', gitHub)

    expect(engineer.gitHub).toBe(gitHub)
});

test('get github username via getHub()', () => {
    const gitHub = 'John400'
    const engineer = new Engineer('name', 'email', 'id', gitHub)

    expect(engineer.getHub()).toBe(gitHub)
});

test('get role via getRole()', () => {
    const engineer = new Engineer('name', 'email', 'id', 'John400')

    expect(engineer.getRole()).toBe('Engineer')
})
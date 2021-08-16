const Intern = require('../lib/Intern');

test('get school ', () => {
    const school = 'Harvard University'
    const intern = new Intern('name', 'email', 'id', school)

    expect(intern.school).toBe(school)
})

test('get school via getSchool()', () => {
    const school = 'Harvard University'
    const intern = new Intern('name', 'email', 'id', school)

    expect(intern.getSchool()).toBe(school)
})

test('get role via getRole()', () => {
    const intern = new Intern('name', 'email', 'id', 'Harvard University')

    expect(intern.getRole()).toBe('Intern')
})
const Intern = require('../lib/intern');

test('creates intern object', () => {
    const intern = new Intern('Tom Hanks', 98, 'thanks@gmail.com', 'CSU');

    expect(typeof(intern)).toBe('object');
    expect(intern.name).toBe('Tom Hanks');
    expect(intern.id).toBe(98);
    expect(intern.email).toBe('thanks@gmail.com');
    expect(intern.school).toBe('CSU');
});

test('returns intern school', () => {
    const intern = new Intern('Tom Hanks', 98, 'thanks@gmail.com', 'CSU');

    expect(intern.getSchool()).toEqual(expect.stringContaining('CSU'));
});

test('returns role', () => {
    const intern = new Intern('Tom Hanks', 98, 'thanks@gmail.com', 'CSU');

    expect(intern.getRole()).toEqual(expect.stringContaining('Intern'));
});
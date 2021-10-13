const Employee = require('../lib/employee');

test('creates employee object', () => {
    const employee = new Employee('John Doe', 42, 'jdoe@gmail.com');

    expect(typeof(employee)).toBe('object');
    expect(employee.name).toBe('John Doe');
    expect(employee.id).toBe(42);
    expect(employee.email).toBe('jdoe@gmail.com');
});

test('returns employee name', () => {
    const employee = new Employee('John Doe', 42, 'jdoe@gmail.com');

    expect(employee.getName()).toEqual(expect.stringContaining('John Doe'));
});

test('returns employee id', () => {
    const employee = new Employee('John Doe', 42, 'jdoe@gmail.com');

    expect(employee.getId()).toEqual(42);
});

test('returns employee email', () => {
    const employee = new Employee('John Doe', 42, 'jdoe@gmail.com');

    expect(employee.getEmail()).toEqual(expect.stringContaining('jdoe@gmail.com'));
});

test('returns role', () => {
    const employee = new Employee('John Doe', 42, 'jdoe@gmail.com');

    expect(employee.getRole()).toEqual(expect.stringContaining('Employee'));
});
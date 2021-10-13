const Manager = require('../lib/manager');

test('creates manager object', () => {
    const manager = new Manager('Warren Buffett', 1, 'wbuffett@gmail.com', 1);

    expect(typeof(manager)).toBe('object');
    expect(manager.name).toBe('Warren Buffett');
    expect(manager.id).toBe(1);
    expect(manager.email).toBe('wbuffett@gmail.com');
    expect(manager.officeNumber).toBe(1);
});

test('returns role', () => {
    const manager = new Manager('Warren Buffett', 1, 'wbuffett@gmail.com', 1);

    expect(manager.getRole()).toEqual(expect.stringContaining('Manager'));
})
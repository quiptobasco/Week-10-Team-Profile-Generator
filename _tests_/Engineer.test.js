const Engineer = require('../lib/engineer');

test('creates engineer object', () => {
    const engineer = new Engineer('Thomas Edison', 13, 'tedison@gmail.com', 'teddison');

    expect(typeof(engineer)).toBe('object');
    expect(engineer.name).toBe('Thomas Edison');
    expect(engineer.id).toBe(13);
    expect(engineer.email).toBe('tedison@gmail.com');
    expect(engineer.gitHub).toBe('teddison');
});

test('returns engineer github username', () => {
    const engineer = new Engineer('Thomas Edison', 13, 'tedison@gmail.com', 'teddison');

    expect(engineer.getGithub()).toEqual(expect.stringContaining('teddison'));
});

test('returns role', () => {
    const engineer = new Engineer('Thomas Edison', 13, 'tedison@gmail.com');

    expect(engineer.getRole()).toEqual(expect.stringContaining('Engineer'));
});
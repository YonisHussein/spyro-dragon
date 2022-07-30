const Engineer = require ('../lib/Engineer');
const engineer = new Engineer ('Yonis', '111111', 'yonis@email.com', "yonis");

test('a new engineer', () => {
    expect (engineer.name).toEqual('Yonis');
    expect (engineer.id).toEqual('111111');
    expect (engineer.email).toEqual('yonis@email.com');
    expect (engineer.github).toEqual('yonis');
});

const Employee = require ('./lib/Employee');
const employee = new Employee ('Yonis', '111111', 'yonis@email.com');

test('a new employee'), () => {
    expect (employee.name).toEqual('Yonis');
    expect (employee.id).toEqual('111111');
    expect (employee.email).toEqual('yonis@email.com');
};

test('test getting name with getName', () => {
    expect(employee.getName()).toEqual('Yonis')
});

test
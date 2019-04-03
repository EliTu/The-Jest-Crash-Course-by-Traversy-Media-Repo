const functions = {
    add: (a, b) => a + b,
    isNull: () => null,
    checkValue: (el) => el,
    createUser: () => {
        const user = {
            firstName: 'John'
        }
        user['lastName'] = 'Doe';
        return user;
    }
}

module.exports = functions;
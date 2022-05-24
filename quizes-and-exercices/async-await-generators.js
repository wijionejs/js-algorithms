const isThenable = candidate => candidate && typeof candidate.then === 'function';

const asyncFn = (generatorFn) => (...args) => {
    const producer = generatorFn(...args);

    const interpreter = (lastValue, wasError) => {
        const { value, done } = wasError
        ? producer.throw(lastValue)
        : producer.next(lastValue);

        if (!done) {
            if (isThenable(value)) {
                return value.then(
                    resolvedValue => interpreter(resolvedValue),
                    rejectedValue => interpreter(rejectedValue, true),
                )
            } else {
                return interpreter(value);
            }
        } else {
            if (!isThenable(value)) {
                return Promise.resolve(value);
            }
            return value;
        }
    };

    return interpreter();
}


const asyncStuff = asyncFn(function* () {
    try {
        const usersUrl = 'https://jsonplaceholder.typicode.com/users';
        const todosUrl = 'https://jsonplaceholder.typicode.com/todos';
    
        const users = yield fetch(usersUrl);
    
        console.log(users);
    
        const todos = yield fetch(todosUrl);

        return { users, todos };
    } catch(e) {
        console.log('ERROR: ', e);
    }
});
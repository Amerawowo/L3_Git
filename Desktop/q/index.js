function getPostsSortedByTitleLength(callback) {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(posts => {
            const sortedPosts = posts.sort((a, b) => b.title.length - a.title.length);
            callback(null, sortedPosts);
        })
        .catch(error => callback(error, null));
}

function getCommentsSortedByAuthor(callback) {
    fetch('https://jsonplaceholder.typicode.com/comments')
        .then(response => response.json())
        .then(comments => {
            const sortedComments = comments.sort((a, b) => a.name.localeCompare(b.name));
            callback(null, sortedComments);
        })
        .catch(error => callback(error, null));
}

function getUsersWithSelectedFields() {
    return fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users => {
            return users.map(user => ({
                id: user.id,
                name: user.name,
                username: user.username,
                email: user.email,
                phone: user.phone
            }));
        });
}

function getIncompleteTodos() {
    return fetch('https://jsonplaceholder.typicode.com/todos')
        .then(response => response.json())
        .then(todos => {
            return todos.filter(todo => !todo.completed);
        });
}

async function getPostsSortedByTitleLengthAsync() {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const posts = await response.json();
    return posts.sort((a, b) => b.title.length - a.title.length);
}

async function getCommentsSortedByAuthorAsync() {
    const response = await fetch('https://jsonplaceholder.typicode.com/comments');
    const comments = await response.json();
    return comments.sort((a, b) => a.name.localeCompare(b.name));
}
async function getUsersWithSelectedFieldsAsync() {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const users = await response.json();
    return users.map(user => ({
        id: user.id,
        name: user.name,
        username: user.username,
        email: user.email,
        phone: user.phone
    }));
}


async function getIncompleteTodosAsync() {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos');
    const todos = await response.json();
    return todos.filter(todo => !todo.completed);
}
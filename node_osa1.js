//reading json data to the variable 
const users = require('./users.json');
const posts = require('./posts.json');

//function that prints out a name of the user and their posts
function userAndPosts(users, posts) {
    users.forEach(user => {
        titles = printPost(user.id, posts);
        console.log(user.name);
        titles.forEach(title => console.log('- ' + title));
        console.log('\n');
    })
}

//function that gets titles from the post data
function printPost(userId, posts) {
    return posts.filter(post => post.userId == userId).map(post => post.title);
}

//function that combines two json files based on userID
function joinJsons(users, posts) {
    return JSON.stringify(users.map(user => {
        let user_posts = posts.filter(post => post.userId == user.id);
        user['posts'] = user_posts;
        return user;
    }))

}

//task nbr 1: calling the function to print out user and post titles
userAndPosts(users, posts);

//task nbr 2: printing out combined json 
console.log(joinJsons(users, posts));

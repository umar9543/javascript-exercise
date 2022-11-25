var users = ['Ali','umer','bilal','anas','kashif'];
 while (users.length > 0) {
    users.pop();
}
console.log(users.length);
if ( users.length == 0) {
    console.log("We need to find some users!");
};
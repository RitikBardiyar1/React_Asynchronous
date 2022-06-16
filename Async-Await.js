
async function list(){
    console.log('Inside list function');
    const response = await fetch('https://api.github.com/users');
    console.log('before response');
    const users = await response.json();
    console.log('users resolved')
    return users;

}

console.log("Before calling list")
let a = list();
console.log("After calling list")
console.log(a);
a.then(data => console.log(data))
console.log("Last line of this js file")
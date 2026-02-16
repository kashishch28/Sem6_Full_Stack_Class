// function add(a,b){
//     return a+b;
// }

// add();

// module.exports = add;
//export default add;

//if multiple functions are there then we can export them as an object like this
// module.exports = {
//     add,
//     subtract,
//     multiply
// }



//calback
// function greet(name,callback){
//     console.log("Hello "+name);
//     callback();
// }
// function sayGoodbye(){
//     console.log("Goodbye");
// }
// greet("Kashish",sayGoodbye);


//api call
fetch("https://jsonplaceholder.typicode.com/todos/1")
.then(response => response.json())
.then(json => console.log(json))
.catch(error => console.error("Error fetching data:", error));
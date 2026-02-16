// const { execSync } = require('child_process');

// test('examples run without error', () => {
//   expect(() => execSync('node examples/app.js', { stdio: 'ignore' })).not.toThrow();
// });

// test('fs write functions exist', () => {
//   const fs = require('fs');
//   expect(typeof fs.writeFile).toBe('function');
//   expect(typeof fs.writeFileSync).toBe('function');
// });


//setTimeOut
// kashish()//print
// function kashish() {
//     console.log("hello kashish");
// }
// kashish()//print
// setTimeout(() => {
//     kashish();//print
// },2000);

setTimeout(() => {
    console.log("1");
    setTimeout(() => {
        console.log("2");
        setTimeout(() => {
            console.log("3");
            setTimeout(() => {
                console.log("4");
              },2000);  
        },2000);
    },2000);
},2000);

//it causes callback hell and makes code difficult to read and maintain. To avoid this, we can use Promises or async/await for better readability and error handling.

///->Promise

const promise = new Promise((resolve,reject)=>{
  let deliver = true;
  if(deliver){
    resolve("Package delivered successfully");
  }else{
    reject("Package delivery failed");
  }     

});

promise
  .then(()=> console.log("Ye mera hua resolve"))
  .catch(()=> console.log("Ye mera hua reject"));
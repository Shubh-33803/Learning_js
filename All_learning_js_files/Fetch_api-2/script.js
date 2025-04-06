// fetch("https://jsonplaceholder.typicode.com/users")
//   .then((resp) => {
//     return resp.json();
//   })
//   .then((result) => {
//     for(let x in result){
//         document.writeln(`${result[x].name}  - ${result[x].email} </br>`);
//     }
//   })
//   .catch((error) => {
//     console.log("can't fetch data");
//   });





fetch("./student.json")
.then((resp) => {
  return resp.json();
}).then((result) => {
  console.log(result);
})



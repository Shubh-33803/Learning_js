let URL = "https://cat-fact.herokuapp.com/facts/";
let finaldata = document.querySelector(".data");
let clickbtn = document.querySelector("#btn");


// let pms = fetch(URL);

// let getFact = async () => {
//     console.log("fetching data...");
//     let response = await fetch(URL);
//     console.log(response);

//     let data = await response.json();
//     // let rdn = Math.floor(Math.random()*6);
//     finaldata.innerText = data[1].text;
// }


// let getFact = async () => {
//     let response = await fetch(URL);
//     let finalData = await response.json();
//     console.log(finalData);
//     console.log(response);
// }


function getFact(){
    fetch(URL).then((response) => {
        return response.json();
    }).then((finalData) => {
        finaldata.innerText = finalData[0].text;
    });
}


clickbtn.addEventListener("click",getFact);





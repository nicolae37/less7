// function checkNum(){
//     const inpt = document.getElementById("input");
//     if (!inpt.checkValidity()){
//         document.getElementById("success").innerHTML = inpt.validationMessage;
//     }else{
//         document.getElementById("success").innerHTML = "Input ok";
//     }

// }

// const msg = document.getElementById("success");
// function getLocation(){

//     if(navigator.geolocation){
//         navigator.geolocation.getCurrentPosition(showPosition);
//     }else{
//         msg.innerHTML = "Location error";
//     }
// }

// function showPosition(position){
//     let pos = "Latitude: " + position.coords.latitude
//                     + "<br>Longitude " +position.coords.longitude;
//     localStorage.setItem("pos", pos);
// }



// localStorage.setItem("name", "Max");
// document.getElementById("str").innerHTML = localStorage.getItem("pos");


// localStorage --- sessionStorage
// ramine let   --- dispare let dupa ce inchizi browserul

// Request -> server
// XmlHTTP

// fetch(url)
//     .then(response => {
//         console.log(response.status);
//     })
//     .catch(error => {
//         console.log(error);
//     })

async function fetchText(){
    let response = await fetch('readme.txt');
    let data = response.status();
    console.log(data);
}
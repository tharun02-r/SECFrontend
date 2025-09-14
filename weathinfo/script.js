//json
/*console.log("===Houe 1:JSON BASICS===");

let student = {
  name: "Tharun",
  age: 21,
  marks:[30,25,25,20]
};
//obj->json
let jsonString = JSON.stringify(student);
console.log("JsonString:",jsonString);
//json->obj
let parsedobj=JSON.parse(jsonString);
console.log("Parsed Object:", parsedobj);*/
/*

let books1={
    title:["ZERO TO ONE"],
    author:["Peter Thiel"],
    price:[200]
};


let books2={
    title:["Ramyanam"],
    author:["vedavyasa"],
    price:[150]
};
let books3={
    title:["Bhagavadgita"],
    author:["ShriKrishna"],
    price:[100]
};

let jsonString = JSON.stringify(books1",books2,books3);
console.log("JsonString:",jsonString);
/*
let books={
    title:["ZERO TO ONE","Ramyanam","Bhagavadgita"],
    author:["Peter Thiel","vedavyasa","ShriKrishna"],
    price:[200,150,100]
};
let jsonString = JSON.stringify(books);
console.log("JsonString:",jsonString);*/
/*
let books=[
    {title:"ZERO TO ONE", author:"Peter Thiel", price:200},
    {title:"Ramyanam", author:"vedavyasa", price:150},
    {title:"Bhagavadgita", author:"ShriKrishna", price:100} 
];
console.log("books title",books.map(b => b.title)); */



//fetch api
/*
fetch("https://jsonplaceholder.typicode.com/posts/1")
  .then(response => response.json())
  .then(data => console.log("Fetched data:", data))
  .catch(error => console.error("Error:", error));

  fetch("https://jsonplaceholder.typicode.com/posts/")
  .then(response => response.json()) 
  .then(data => console.log("Fetched data: ",data))
  .catch(error => console.error('Error:', error));


  //Display json on the display
    //fetch all users and show in console + page
  fetch("https://jsonplaceholder.typicode.com/users/")
  .then(res => res.json())
  .then(users=>{
    let output="<h3>User List</h3><ll>";
    users.forEach(user=>{
        output+=`<li>${user.name} : ${user.email}</li>`;
    });
    output += "</ll>";
    //append result to page 
    document.body.innerHTML +=output;
  });

*/
  //json

// Predefined city → coordinates
///json

// Predefined city → coordinates
const cityCoords = {
  "bangalore": { lat: 12.97, lon: 77.59 },
  "delhi": { lat: 28.61, lon: 77.20 },
  "mumbai": { lat: 19.07, lon: 72.87 },
  "london": { lat: 51.51, lon: -0.13 },
  "new york": { lat: 40.71, lon: -74.01 }
};


// Event Listener for button
document.getElementById("fetchBtn").addEventListener("click", () => {
  let city = document.getElementById("cityInput").value.toLowerCase();

    if (!cityCoords[city]) {
    document.getElementById("weather").innerHTML = " City not in list!";
    return;
  }

  let coords = cityCoords[city];
  let url = `https://api.open-meteo.com/v1/forecast?latitude=${coords.lat}&longitude=${coords.lon}&current_weather=true`;

  // AJAX Fetch
  fetch(url)
    .then(res => res.json())
    .then(data => {
      if (data.current_weather) {
        document.getElementById("weather").innerHTML = `
          <h3>Weather in ${city}</h3>
          <p>🌡 Temp: ${data.current_weather.temperature}°C</p>
          <p>💨 Wind: ${data.current_weather.windspeed} km/h</p>
          <p>⏱ Time: ${data.current_weather.time}</p>
        `;
      } else {
        document.getElementById("weather").innerHTML = "⚠️ No data available.";
      }
    })
    .catch(error => {
      console.error(error);
      document.getElementById("weather").innerHTML = "⚠️ Error fetching weather.";
    });
});

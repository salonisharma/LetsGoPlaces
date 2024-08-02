//debugger;
const btnSearch = document.getElementById('btnSearch');
btnSearch.addEventListener('click', searchlocation);
function searchlocation() {
    const input = document.getElementById('searchText').value.toLowerCase();
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = '';

    fetch('travel_recommendation_api.json')
      .then(response => response.json())
      .then(data => {
        debugger;
        const countries = data.countries.find(item => item.name.toLowerCase() === input);
        //const temples = data.temples.find(item => item.name.toLowerCase() === input);
        //const beaches = data.beaches.find(item => item.name.toLowerCase() === input);

        if (countries) {
            console.log(countries);
            debugger;
            for (let i = 0; i < countries.cities.length; i++) {
               const cityname = countries.cities[i].name;
               const imageUrl = countries.cities[i].imageUrl;
               const desc = countries.cities[i].description;
                resultDiv.innerHTML+=`<div id="${input}">`;
               resultDiv.innerHTML += `<img src="${imageUrl}" alt="${cityname}">`;
               resultDiv.innerHTML += `<h2 style="color:white">${cityname}</h2>`;
               resultDiv.innerHTML += `<button class="search-button" id="visitButton">Visit</button>`;
               resultDiv.innerHTML += `<p style="color:white">${desc}</p></div>`;
              }
        } else if(input=="temples") {
            console.log(data.temples);
            for (let i = 0; i < data.temples.length; i++) {
                const cityname = data.temples[i].name;
                const imageUrl = data.temples[i].imageUrl;
                const desc = data.temples[i].description;
                 resultDiv.innerHTML+=`<div id="${input}">`;
                resultDiv.innerHTML += `<img src="${imageUrl}" alt="${cityname}">`;
                resultDiv.innerHTML += `<h2 style="color:white">${cityname}</h2>`;
                resultDiv.innerHTML += `<button class="search-button" id="visitButton">Visit</button>`;
                resultDiv.innerHTML += `<p style="color:white">${desc}</p></div>`;
               }
        } else if(input=="beaches"){
            console.log(data.beaches);
            for (let i = 0; i < data.beaches.length; i++) {
                const cityname = data.beaches[i].name;
                const imageUrl = data.beaches[i].imageUrl;
                const desc = data.beaches[i].description;
                 resultDiv.innerHTML+=`<div id="${input}">`;
                resultDiv.innerHTML += `<img src="${imageUrl}" alt="${cityname}">`;
                resultDiv.innerHTML += `<h2 style="color:white">${cityname}</h2>`;
                resultDiv.innerHTML += `<button class="search-button" id="visitButton">Visit</button>`;
                resultDiv.innerHTML += `<p style="color:white">${desc}</p></div>`;
               }
        }
        else {
            console.log("location not found");
            resultDiv.innerHTML += `<h1 style="color:white">Location Not Found</h1>`;
        }
      })
      .catch(error => {
        console.error('Error:', error);
        resultDiv.innerHTML += `<h1 style="color:white">An error occurred while fetching location.</h1>`;
      });
  }
 
  /*const visitButton = document.getElementById('visitButton');
  visitButton.addEventListener('click', visitButton);
function visitButton() {
    location.replace("./travel_recommendation_dummyScreen.html");
}*/
debugger;
const btnSearch = document.getElementById('btnSearch');
btnSearch.addEventListener('click', searchlocation);
function searchlocation() {
    const input = document.getElementById('searchText').value.toLowerCase();
    //const resultDiv = document.getElementById('result');
    //resultDiv.innerHTML = '';

    fetch('travel_recommendation_api.json')
      .then(response => response.json())
      .then(data => {
        const countries = data.countries.find(item => item.name.toLowerCase() === input);
        const temples = data.temples.find(item => item.name.toLowerCase() === input);
        const beaches = data.beaches.find(item => item.name.toLowerCase() === input);

        if (countries) {
            console.log(countries);
          /*const symptoms = countries.symptoms.join(', ');
          const prevention = condition.prevention.join(', ');
          const treatment = condition.treatment;

          resultDiv.innerHTML += `<h2>${condition.name}</h2>`;
          resultDiv.innerHTML += `<img src="${condition.imagesrc}" alt="hjh">`;

          resultDiv.innerHTML += `<p><strong>Symptoms:</strong> ${symptoms}</p>`;
          resultDiv.innerHTML += `<p><strong>Prevention:</strong> ${prevention}</p>`;
          resultDiv.innerHTML += `<p><strong>Treatment:</strong> ${treatment}</p>`;*/
        } else if(temples) {
            console.log(temples);
        } else if(beaches){
            console.log(beaches);
        }
        else {
            console.log("location not found");
          //resultDiv.innerHTML = 'Condition not found.';
        }
      })
      .catch(error => {
        console.error('Error:', error);
        //resultDiv.innerHTML = 'An error occurred while fetching data.';
      });
  }
 
// Creating headers for the fetch request
const headers = new Headers({
  "Content-Type": "application/json",
  "x-api-key": "live_BtxArZKjizmS7Ierj6c5ityRKEFvavFlNGp7c1Idiyc5sJxTUN4NGj4CTPowarZf"
});

// Request options object
var requestOptions = {
  method: 'GET',
  headers: headers,
  redirect: 'follow'
};

// Looping 12 times to fetch dog images
for (let i = 0; i < 12; i++) {
  // Fetching dog images from the API
  fetch("https://api.thedogapi.com/v1/images/search?size=med&mime_types=jpg&format=json&has_breeds=true&order=RANDOM&page=0&limit=1", requestOptions)
      .then(response => response.json()) // Parsing the response as JSON
      .then(result => displayDogs(result)) // Calling displayDogs function with the fetched data
      .catch(error => console.log('error', error)); // Handling errors
}

// Function to display dog information
function displayDogs(result) {
  const dogcard = document.getElementById("Dogcards");

  // Creating a new card element
  const card = document.createElement("div");
  card.classList.add("col-sm-6", "col-md-4", "col-lg-4", "col-xl-4");

  // Populating card with dog information
  card.innerHTML = `
      <div class="card-h-50 text-white ">
          <div class="card-header">${result[0].breeds[0].name}</div>
          <div class="card-text">
              <p><img src="${result[0].url}" class="img-fluid" alt="Transparent Image" height="100vmax" width="200vmax"></p>
              <p>breed for: ${result[0].breeds[0].bred_for}</p>
              <p>breed group: ${result[0].breeds[0].breed_group}</p>
              <p>life span: ${result[0].breeds[0].life_span}</p>
              <p>weight-metric: ${result[0].breeds[0].weight.metric}</p>
              <p>temperament: ${result[0].breeds[0].temperament}</p>
          </div>
      </div>`;
  
  // Appending card to the dogcard element
  dogcard.appendChild(card);
}

// Adding event listener to reload the page when refresh button is clicked
document.getElementById("refreshButton").addEventListener("click", function() {
  // Reload the page
  location.reload();
});

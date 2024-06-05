## Random Dog Cards:

**Description**
   
   * ## Food Information Showcase

**Description:**
      
  * In [html file](./index.html)
    
     - This HTML file creates a web page titled "Dog" with a navigation bar (navbar) at the top, featuring a brand "Random dog cards" and a refresh button on the right side.
     - The main content area consists of a container with a background image, within which dog cards will be displayed in a row. Bootstrap CSS and JavaScript are utilized, along with a custom JavaScript file "script.js" for additional functionality.
    
  * In [javaScript file](./js/script.js)
  
      **Header Initialization**: Creates a `Headers` object containing necessary headers for the fetch request, including content type and an API key for authorization.
      
      **Request Options**: Defines options for the fetch request, including the method (GET), headers, and redirect behavior.
      
      **Loop for Fetching Dog Images**: Initiates a loop to fetch dog images from an API endpoint. It loops 12 times to fetch 12 images.
      
      **Fetch Request**: Utilizes the `fetch()` API to make GET requests to the specified API endpoint for fetching dog images. 
      
      **Response Handling**: Handles the response from the API by parsing it as JSON using `.json()`. 
      
      **Display Function Invocation**: Calls the `displayDogs` function with the fetched data to render the dog images and associated information.
      
      **Dog Card Creation**: Within the `displayDogs` function, it dynamically creates HTML elements representing dog cards using `document.createElement()`.
      
      **Populating Card Information**: Populates the created card elements with information about the fetched dogs, including breed name, image URL, breed characteristics, and temperament.

      **Appending Cards**: Appends the created card elements to the container element with the ID "Dogcards" to display them on the webpage.

      **Refresh Button Event Listener**: Adds an event listener to the refresh button in the navbar. Upon clicking the refresh button, the page is reloaded, triggering a new set of fetch requests for a fresh batch of dog images to be displayed.
       
  * In [Style file](./css/style.css)
     - The CSS snippet styles elements with the class 'root' by setting a background image using the URL "/dog-image.jpg" and ensuring it covers the entire area of the element with the property `background-size: cover;`.

     
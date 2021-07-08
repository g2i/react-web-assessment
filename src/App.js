import './App.css';

/*
 *
 * # Cities To Travel Challenge
 *
 * Your goals:
 *
 * - Implement a page that displays a list of cities to travel.
 * - This list should be a vertical list.
 * - The cities must be retrieved by fetching data from the process.env.REACT_APP_ENDPOINT url using the global Fetch API
 *     - You must figure out how to fetch this data by reading the ./server.js file.
 *     @Test verify the list items match
 * - Each list item is a rectangle box that displays the city's title, ranking, and its poster.
 *    @TEST Verify no descriptions are visible 
 *   @Test verify the list item is a rect w > h.
 *
 * - On click of a city list item, a modal should open up with more information about the city.
 *   @Test click a city and check you can find its description no other descriptions
 *
 * - The city modal must include the city's name, ranking, description, and poster image.
 *     - The modal should also include a note box that allows me to add a note about this city.
 *     - The modal note box shall be persisted locally using the document.localStorage with the key g2i_travel_city_${cityId}
 *
 *   @Test add a note && verify localStorage is written to with the right key value.
 *
 * - Implement a search box at the top that allows me to search city names.
 *     - On search, we expect to see the cities that match the search query update
 *     - On search, we expect a query param called search to be added to the url with the search strings
 *     - Implement a URL query param called search 
 *     - If user navigates to the page <url>?search="city name" we expect "city name" to be populated in the search box & appropriately filter out the city list.
 *
 * - The UX must be somewhat semantic and implement common patterns we see in the World Wide Web.
 *   @TEST usage of li, button, img with correct tags
 *
 * - logAnalytics must be called when ever a city detail is opened and when it is unmounted. See logAnalytics.js file for more instructions.  
 *   @TEST check this 
 *
 * - The code should follow project patterns defined by its linters. 
 *   @TEST Run linters and see if any errors are returned.
 *
 * - The code should follow React patterns used in the industry.
 *   @TEST Verify what? TODO
 *
 * - The code should follow naming conventions.
 *   @Test verify naming conventions with a linter? TODO
 *
 * - The code should reuse anything already available within the project.
 *   @Test verify it is consuming components and rendering them.
 *
 * */


// TODO - Write the implementation then write the test for it. 

function App() {
  return (
    <div className="App">
      <header className="App-header">
        Show off your skills
      </header>
    </div>
  );
}

export default App;

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
 * - Each list item is a rectangle box that displays the city's title, ranking, and its poster.
 * - On click of a city list item, a modal should open up with more information about the city.
 * - The city modal must include the city's name, ranking, description, and poster image.
 *     - The modal should also include a note box that allows me to add a note about this city.
 *     - The modal note box shall be persisted locally using the document.localStorage with the key g2i_travel_city_${cityId}
 * - Implement a search box at the top that allows me to search city names.
 *     - On search, we expect to see the cities that match the search query update
 *     - On search, we expect a query param called search to be added to the url with the search strings
 *     - Implement a URL query param called search 
 *     - If user navigates to the page <url>?search="city name" we expect "city name" to be populated in the search box & appropriately filter out the city list.
 * - The UX must be somewhat semantic and implement common patterns we see in the World Wide Web.
 * - logAnalytics must be called when ever a city detail is opened and when it is unmounted. See logAnalytics.js file for more instructions.  
 * - The code should follow project patterns defined by its linters. 
 * - The code should follow React patterns used in the industry.
 * - The code should follow naming conventions.
 * - The code should reuse anything already available within the project.
 *
 * */


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

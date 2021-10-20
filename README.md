# ev.energy coding challenge

This application was created as a coding challenge for ev.energy

## Approach & Thoughts

Because of the limited time available for this project I focused on covering the core goal
of the app without any polishing or complementary features that I would have implemented in a real commercial scenario.

That being said, the flow of the app consists of retrieving POI data from openchargemap.org,
based on the geolocation of the user and displaying the POI's into a map ui component.
Using the map, the user can select any of the chargers and "Start Charging" (a fictive POST request)
I also tried to cover in a very basic way the error/loading states.

Given more time there are many improvements that I would have done:
- Data displayed should be more relevant, for this demo I used only the minimum required data from api's response,
like the coordinates, title and ID
- added tests
- a much better designed Ui&Ux
- more features, like selecting the distance range for available chargers
- accessibility
- overall more time in each aspect of the development process and probably I could keep going with this list for hours :)

## Starting the project

You will need to have node and npm installed:
https://docs.npmjs.com/downloading-and-installing-node-js-and-npm

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

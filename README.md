# Monstar Lab, Inc - Restaurant Finder Coding Exercise

## Installation

**Clone the repository or Download**
```bash
git clone git@github.com:ashikjs/interview-assignment-02.git
```
To install dependencies open the project directory into terminal and run this command.
```bash
npm install
```

**Env file configuration**

Add this API key to `.env.developemnt` for development and `.env.production` for production `REACT_APP_MAP_API_KEY=***`.

**To serve the application the below commands**

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## Technical Specification

High performance, Unidirectional data flow, and a Small learning curve influence me to choose reactjs for this project,
another reason is Monstar Lab, Inc was a high preference to use reactjs for this project. Redux for keeping consistently 
behave with high powerful state management when the application goes for larger scale. To develop faster and interactive
UI/UX used React UI library `ant`, it also gives some extra benefits like high-quality React components, TypeScript with
predictable static types and design resources and development tools, etc. Also used reactjs default included testing 
tools and officially recommended tools Jest testing framework to test application or write unit testing.

Few more words about project folder structure and coding here you can see a shared folder to use commonly shareable services,
components, modules, etc. Layout for project basic layout systems like header, footer and sidebar, etc. Middleware for debugging
or track/log redux state changed and dispatch.

Maybe it would have been better if I could have been ensured 100% test case, redux selector used, data fetching loading
state, make API call with pagination, file path Alice and configuration option to change location and radius from UI
interaction etc due to the time limitation I am unable to do ensure all of those right now.

- CSS folder architecture followed by SMACSS but CSS code writing as OOCSS.
- Used Redux for state management.
- React UI library `ant` that contains a set of high-quality components and demos for building rich, interactive user interfaces.
- Follow the Airbnb design system for JS code writing.
- Used CSS preprocessor SCSS for style.
- Used Prettier for code formatting concerns.
- Used Eslint to be flexible and configurable for the use case.
- Used Jest testing framework to ensure the correctness of any javaScript codebase.

## Disclaimer 

Sorry to say I was unable to use [Foursquare.com](https://developer.foursquare.com) place API due to the CORS issue.
Still, I was able to call API that's from Postman. So I make a JSON DB (23 restaurants with 3km radios of Monstar Lab
which of those get from foursquare API calls by postman) to Github and call it by
[my-json-server.typicode.com](https://my-json-server.typicode.com/) to make mock or dummy data response all of those.  

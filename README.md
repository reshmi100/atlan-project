# This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

# Libraries Used :

## [Material UI](https://www.npmjs.com/package/@mui/material)

## [Axios](https://axios-http.com/docs/intro)

##

## Material UI

MUI Core contains foundational React UI component libraries for shipping new features faster.

Material UI is a comprehensive library of components that features our implementation of Google's Material Design system.

MUI Base is our library of "unstyled" components and low-level hooks. With Base, you gain complete control over your app's CSS and accessibility features.

MUI System is a collection of CSS utilities to help you rapidly lay out custom designs.

### Installation

with npm

    npm install @mui/material @emotion/react @emotion/styled

with yarn

    yarn add @mui/material @emotion/react @emotion/styled

## Axios

Axios is a promise-based HTTP Client for node.js and the browser. It is isomorphic (= it can run in the browser and nodejs with the same codebase). On the server-side it uses the native node.js http module, while on the client (browser) it uses XMLHttpRequests.

### Features :

Make XMLHttpRequests from the browser \
Make http requests from node.js \
Supports the Promise API \
Intercept request and response \
Transform request and response data \
Cancel requests \
Automatic transforms for JSON data \
Client side support for protecting against XSRF \

### Installation

Using npm

    npm install axios

Using bower:

    bower install axios

Using yarn:

    yarn add axios

Using jsDelivr CDN:

    <script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>

Using unpkg CDN:

    <script src="https://unpkg.com/axios/dist/axios.min.js"></script>

## prop-types

Runtime type checking for React props and similar objects.

You can use prop-types to document the intended types of properties passed to components.React (and potentially other libraries) will check props passed to your components against those definitions, and warn in development if they don’t match.

### Installation

    npm install --save prop-types

### Importing

    import PropTypes from 'prop-types'; // ES6
    var PropTypes = require('prop-types'); // ES5 with npm

### CDN

If you prefer to exclude prop-types from your application and use it globally via window.PropTypes, the prop-types package provides single-file distributions, which are hosted on the following CDNs:

#### unpkg

    <!-- development version -->
    <script src="https://unpkg.com/prop-types@15.6/prop-types.js"></script>

    <!-- production version -->
    <script src="https://unpkg.com/prop-types@15.6/prop-types.min.js"></script>

#### cdnjs

    <!-- development version -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/prop-types/15.6.0/prop-types.js"></script>

    <!-- production version -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/prop-types/15.6.0/prop-types.min.js"></script>

To load a specific version of prop-types replace 15.6.0 with the version number.

# Loading Time

The laoding time of the page was measured by lighthouse in chrome browser web dev tools.
it can be added

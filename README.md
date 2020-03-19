i18n-app
===========


A dashboard for user and web application analytics.

## Introduction
The example app is a logging/user analytic dashboard called BugCatcher. The dashboard list a series of fake metrics to emulate what an actual analytic tool may show. Use the dropdown on the top right of the application to switch languages.

Cloning and running this repo will display the application on `localhost:8080`

The next few sections of the introduction will go over what and how I implemented each part of the assignment. For example, babel/webpack setup and testing setup.

### React Project Setup

I decided to create the React project from scratch, since many of the boilerplates I found had too many unneeded dependencies.

#### yarn
To start off, I ran `yarn init` within my project directory, which creates a `package.json`, which keeps all the dependencies I need consistent.

#### Babel
To transpile es6 and es7 syntax to something web browsers can understand, I used Babel. Using `yarn` I installed a couple Babel modules such as `babel-cli` and `babel-core`. Additionally, I added some babel presets like `babel-preset-env` which allows me to run es6, es7, and es8 code and `babel-preset-react` to run jsx and react code.

To configure my babel setting, I created a `.babelrc` file and included the presets and plugins I want for my app.

#### Webpack

Webpack is needed to bundle my react files, css files, and other modules to a single file that an html file can use. I start by installing webpack through yarn and creating a config file, `webpack.config.js`. 

Some important things I add to my webpack config were loaders. The loaders help process files that are not vanilla javascript, such as the es6/es7 files and css files.

I also added `html-webpack-plugin` to put the built javascript into the `index.html` file in the public folder. I also used another plugin called `clean-webpack-plugin`, to clean out the build folder before every build.

I also added webpack's dev server and configured it in the config file to run on `localhost:8080`

Also, I wrote another webpack config file for a production build, `webpack.config.prod.js`, and added a script in the `package.json` to build the app.

## How to Setup/Installation
**Step 1:** git clone this repo:

```bash
git clone https://github.com/csumphan/i18n-app.git
```

**Step 2:** cd to the cloned repo:

```bash
cd i18n-app
```

**Step 3:** Install the Application with `yarn`


**Step 4:** Run the Application using `yarn start`


## How to Create Production Build

**Step 1:** Complete repo setup/installation


**Step 2:** Run the webpack build using `yarn build`

You can find the build in dist/ in the project's root directory


## Development

After cloning and running `yarn`, you can use the following `yarn` commands:

Command         | Description
--------------- | -----------
`yarn start`    | Start application
`yarn build`    | Create production build



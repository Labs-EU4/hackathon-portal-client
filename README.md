[![Build Status](https://travis-ci.com/Labs-EU4/hackathon-portal-client.svg?branch=develop)](https://travis-ci.com/Labs-EU4/hackathon-portal-client) [![Coverage Status](https://coveralls.io/repos/github/Labs-EU4/hackathon-portal-client/badge.svg?branch=develop)](https://coveralls.io/github/Labs-EU4/hackathon-portal-client?branch=develop) [![Netlify Status](https://api.netlify.com/api/v1/badges/c76b92d4-4a5a-4340-b38e-d9411cfb4560/deploy-status)](https://app.netlify.com/sites/suspicious-kare-dc8a3a/deploys)


# Hackton

## Deployment

You can find the deployed project at [Hackathon](https://suspicious-kare-dc8a3a.netlify.com/).

## Project Overview

[Trello Board](https://trello.com/b/SEMsn9ik/hackathon)

[Product Release Canvases](https://www.notion.so/50bba1019cc546a7af4b6bd54ed0979a?v=f4161624690443c2bc6c90d3033aded5)

### Summary:

A comprehensive portal for hackathons where students can submit their work and judges can evaluate in one place. It is an app that helps you organize and evaluate Hackathons.

## Table of Content
1. [Getting started](#getting-started "Getting Started")
- [Prerequisites](#prerequisites "Prerequisites")
- [Installation](#installation "Installation")
- [Enviroment variables](#enviroment-variables "Enviroment Variables")
2. [Running the tests](#running-the-tests " Running the tests")
3. [Technology stack](#technology-stack "Technology Stack")
4. [Versioning](#versioning "Versioning")
5. [Contributing](#contributing "Contributing")
6. [Authors](#authors "Authors")
7. [Acknowledgments](#acknowledgments "Acknowledgments")
8. [License](#license "License")

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.
Note that this repository contains only the frontend implementation of the Hackathon project. You can click **[here](https://github.com/Labs-EU4/lambda-door-server)** to check the backend implementation.

### Prerequisites

To get started with this project you need a basic knowledge of the following.
```
Javascript (ES6)
NodeJs
SQL (Postgres)
Version Control (Git)
```

### Installation

* Start by cloning the repository to your local machine

```bash
git clone https://github.com/Labs-EU4/hackathon-portal-client.git
```

* Next install the package dependencies by running; this can be `npm` or `yarn

```bash
npm install
```

* After that start or build the application by running `npm start` or `yarn start`

```bash
npm start # For a local development
```

### Enviroment Variables

The following should be inside `.env` file for the app to function correctly.

```
REACT_APP_API_URL='https://hackton-staging.herokuapp.com'
```

## Running the tests

Run `npm test` or `yarn test` in the console.

```bash
npm test
```

## Technology Stack

* [React](https://reactjs.org/) - The web framework used.
* [Redux-saga](https://redux-saga.js.org/) - State management tool.
* [Styled-components](https://www.styled-components.com/) - Used to generate styles.
* [Formik](https://jaredpalmer.com/formik) - Component that helps with building forms
* [Moment](https://momentjs.com/) - A free and open source JavaScript library that removes the need to use the native JavaScript Date object directly.
* [Coveralls](https://coveralls.io/) - Ensure all code is covered by test suite.
* [Jwt-Decode](https://jwt.io/) - A library to decode jwt tokens.
* [Dotenv](https://www.npmjs.com/package/dotenv) - A zero-dependency module that loads environment variables from a .env file into process.env. 
* [Query-string](https://www.npmjs.com/package/query-string) - Used to retrieve the variable values in the HTTP query string.
* [Eslint](https://eslint.org/) - A tool for identifying and reporting on patterns found in ECMAScript/JavaScript code, with the goal of making code more consistent and avoiding bugs.

## Version

This is version 2.0.1

## Contributing


When contributing to this repository, please first discuss the change you wish to make via issue, email, or any other method with the owners of this repository before making a change.

Please note we have a [code of conduct](./CODE_OF_CONDUCT.md). Please follow it in all your interactions with the project.

## Issue/Bug Request

**If you are having an issue with the existing project code, please submit a bug report under the following guidelines:**

- Check first to see if your issue has already been reported.
- Check to see if the issue has recently been fixed by attempting to reproduce the issue using the latest master branch in the repository.
- Create a live example of the problem.
- Submit a detailed bug report including your environment & browser, steps to reproduce the issue, actual and expected outcomes, where you believe the issue is originating from, and any potential solutions you have considered.

### Feature Requests

We would love to hear from you about new features which would improve this app and further the aims of our project. Please provide as much detail and information as possible to show us why you think your new feature should be implemented.

### Pull Requests

If you have developed a patch, bug fix, or new feature that would improve this app, please submit a pull request. It is best to communicate your ideas with the developers first before investing a great deal of time into a pull request to ensure that it will mesh smoothly with the project.

Remember that this project is licensed under the MIT license, and by submitting a pull request, you agree that your work will be, too.

#### Pull Request Guidelines

- Ensure any install or build dependencies are removed before the end of the layer when doing a build.
- Update the README.md with details of changes to the interface, including new plist variables, exposed ports, useful file locations and container parameters.
- Ensure that your code conforms to our existing code conventions and test coverage.
- Include the relevant issue number, if applicable.
- You may merge the Pull Request in once you have the sign-off of two other developers, or if you do not have permission to do that, you may request the second reviewer to merge it for you.


## Authors

| [Anthony Campbell](https://anthonycampbell.dev) | [AbdelIdir ](https://github.com/AbdelIdir)      | [Ekanem David](https://github.com/dueka)        |                                    
| :---------------------------------------------: | :---------------------------------------------: | :---------------------------------------------: | 
|  [<img src="https://avatars3.githubusercontent.com/u/45029641?s=400&v=4" width = "200" />](https://anthonycampbell.dev)     | [<img src="https://avatars0.githubusercontent.com/u/53605229?s=460&v=4" width = "200" />](https://github.com/AbdelIdir) |  [<img src="https://avatars2.githubusercontent.com/u/38921132?s=460&v=4" width = "200" />](https://github.com/dueka)   |
| Team Leader | Dev | Dev |
|                     [<img src="https://github.com/favicon.ico" width="15"> ](https://github.com/AnthonyJCampbell)                      |                 [<img src="https://github.com/favicon.ico" width="15"> ](https://github.com/AbdelIdir)                 |                   [<img src="https://github.com/favicon.ico" width="15"> ](https://github.com/dueka)                   |
| [ <img src="https://static.licdn.com/sc/h/al2o9zrvru7aqj8e1x2rzsrca" width="15"> ](https://www.linkedin.com/in/anthonyjcampbell/) |         [ <img src="https://static.licdn.com/sc/h/al2o9zrvru7aqj8e1x2rzsrca" width="15"> ](https://www.linkedin.com/in/idir-abdel/)         | [ <img src="https://static.licdn.com/sc/h/al2o9zrvru7aqj8e1x2rzsrca" width="15"> ](https://www.linkedin.com/in/ekanem-david-8711719a) |

<br>

|[Emma Andrews](https://github.com/ELAndrews)     | [John Afolabi](https://github.com/john-afolabi) |  [Karim Bertacche](https://github.com/KarimBertacche)|  
| :---------------------------------------------: | :---------------------------------------------: | :---------------------------------------------: |
| [<img src="https://media-exp1.licdn.com/dms/image/C5603AQFRpv9tGUnasQ/profile-displayphoto-shrink_200_200/0?e=1587600000&v=beta&t=mN_NQjxyyVHRDkl0n-OpMoXj1qkYcuYGB5rQIPTBx7c" width = "200" />](https://github.com/ELAndrews) | [<img src="https://avatars3.githubusercontent.com/u/19263499?s=460&v=4" width = "200" />](https://github.com/john-afolabi) | [<img src="https://avatars3.githubusercontent.com/u/49835145?s=460&v=4" width = "200" />](https://github.com/KarimBertacche) |
| Dev | Dev | Dev |
|                                                                                      [<img src="https://github.com/favicon.ico" width="15"> ](https://github.com/ELAndrews)                                                                                       |                                       [<img src="https://github.com/favicon.ico" width="15"> ](https://github.com/john-afolabi)                                       |                 [<img src="https://github.com/favicon.ico" width="15"> ](https://github.com/KarimBertacche)                  |
|                                                                          [ <img src="https://static.licdn.com/sc/h/al2o9zrvru7aqj8e1x2rzsrca" width="15"> ](https://www.linkedin.com/in/emma-andrews-b26768169/)                                                                           |                           [ <img src="https://static.licdn.com/sc/h/al2o9zrvru7aqj8e1x2rzsrca" width="15"> ](https://www.linkedin.com/in/john-afolabi/)                           |       [ <img src="https://static.licdn.com/sc/h/al2o9zrvru7aqj8e1x2rzsrca" width="15"> ](https://www.linkedin.com/in/karim-bertacche-64b270156/)       |

## Acknowledgments

* [Alex Emedeme](https://github.com/AlexEntrepreneur) - Engineering Manager
* [Lambda](https://lambdaschool.com/) 

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.

The MIT License (MIT)

Copyright (c) 2020 Hacktahon

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

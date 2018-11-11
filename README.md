Open the ./dist/index.html.
All bundles are already generated, there is no need to run any extra tasks.

Execute `npm install` from command prompt to install all dependecies.

# Gulp
The application uses Gulp to run tasks.
Execute from command prompt `npm install -g gulp-cli` to make Gulp available.

How to run Gulp
- Execute from command prompt:
`gulp`
- In order to start the watch, execute from command prompt:
`gulp watch`

Gulp is used to bundle all modules together, concatenate css files, linting.

# Architecture
The application is split in 3 layers:
- presentation: the "components" folder
- stores : the "stores" folder
- data access: the "dataacess" folder

Data Access objects make ajax requests.
Stores keep and manage state.
Components render data and manage user interation.

The main.js builds all the necesary objects and mounts the page.

# Tests
Jest is used for testing.
Execute `npm test` to run the tests.

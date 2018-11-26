# How to create a three layer application with React

Splitting a Single Page Application into layers has a set of advantages:

* a better separation of concerns
* the layer implementation can be replaced
* the UI layer can be hard to test. By moving the logic to other layers, it becomes easier to test.

# Files
Open the ./dist/index.html.
All bundles are already generated, there is no need to run any extra tasks.

Execute `npm install` from command prompt to install all dependecies.

# Gulp
Gulp is used to run tasks.
Execute from command prompt `npm install -g gulp-cli` to make Gulp available.

- To run Gulp, execute from command prompt:
`gulp`
- To start the watch, execute from command prompt:
`gulp watch`

# Tests
Jest is used for testing.
Execute `npm test` to run the tests.

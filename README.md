# How to create a three layer application with React

Splitting a Single Page Application into layers has a set of advantages:

* a better separation of concerns
* the layer implementation can be replaced
* the UI layer can be hard to test. By moving the logic to other layers, it becomes easier to test.

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

# Tests
Jest is used for testing.
Execute `npm test` to run the tests.

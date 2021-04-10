# SimpleJestTesting

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.2.4.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Jest](https://jestjs.io/).

This entire project has been setup according to this guide on [How to setup Angular unit testing with jest](https://www.amadousall.com/how-to-set-up-angular-unit-testing-with-jest/)

The [@briebug schematics](https://github.com/briebug/jest-schematic) were used, which simplifies the installation greatly!

No Testbed is used for testing in this project, instead the simpler Jest mocking is used for all tests!

In order to use Jest --watch mode simply run
`npm run test:watch`
When running in watch-mode the following commands can be issued
```
Watch Usage
 › Press f to run only failed tests.
 › Press o to only run tests related to changed files.
 › Press p to filter by a filename regex pattern.
 › Press t to filter by a test name regex pattern.
 › Press q to quit watch mode.
 › Press Enter to trigger a test run.
```
## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

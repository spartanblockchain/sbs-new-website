# SBS Website

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.1.6.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Deploying to Github Pages

Before you make a push to the `prod` branch you mush run the command `npm run build` which will rebuild the `docs` folder that Github Pages deploys from with the updates. After that you will have to do the following commands:
```
git add docs
git commit -m"rebuilt docs folder for gh-pages"
```

## Testing Live Changes
Install the npm package `live-server` with the command 

```npm i live-server```
You can run the command `live-server` within the `docs` folder after you rebuild project with `ng run build`. Then you will see the live version that Github Pages will host in your browser

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

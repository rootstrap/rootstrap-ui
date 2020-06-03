# Rootstrap UI

[![NPM version](https://img.shields.io/npm/v/rootstrap-ui.svg?style=flat)](https://npmjs.org/package/rootstrap-ui)
[![CircleCI](https://circleci.com/gh/rootstrap/rootstrap-ui.svg?style=svg&circle-token=0157efa8af8dfd3211d74b645cdee13c9a500a62)](https://circleci.com/gh/rootstrap/rootstrap-ui)

Rootstrap UI is the components & styles library to build user interfaces in Rootstrap's projects.

Includes:
- Internal, generic and extensible components
- Core styles
- Design guidelines

Goals:
- Unify shared components implementation
- Define style standard for Engineering & Design
- Create Design Systems for specific projects using `rootstrap-ui` as a start point
- Generate guidelines documentation

## Getting started
Rootstrap UI is available as an NPM package. To install the package in your project use `npm` or `yarn`.

```bash
yarn add rootstrap-ui
npm install rootstrap-ui
```

### Styles
Import the style library in your SCSS files after defining the custom variables.


```scss
@import 'your-custom-variables';
@import 'mc-components/dist/styles/scss/index';
```


## Motivation
Moving from nothing to have a DS for each project is unrealistic. After a discussion with Design + Engineering, we decided to implement internal and reusable components/mixins and define guidelines. All the components must be validated with the design team and be as generic as possible.

Guidelines or design rules will be discussed and documented. Then Design + Engineering teams should be aligned with these rules. For some design rules, we will create a Figma template, so it's easier to adopt them in all the projects.

_For example: After defining a typography system, we create a Figma template page for typography with examples, rules, and modifiers. Then the designer can use this template to create custom typography for a specific project just changing a few things, and it will be aligned with the typography system._

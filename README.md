# angular-keypad

<img src="http://cdn.benjamincharity.com/open_source/angular-keypad/keypad-logo.jpg" align="right" alt="angular-keypad">

An Angular directive that creates a numeric keypad.

[![MIT License][license_image]][license_url] [![Coverage Status][coveralls_badge]][coveralls_link] [![NPM version][npm_version_image]][npm_url]

[**Simple Demo (Plunker)**][demo_basic]

_[Comments and Pull Requests welcome!][issues]_

---

## Contents

- [Installation](#installation)
- [Dependencies](#dependencies)
- [Usage](#usage)
- [Styles](#styles)
- [angular-ripple](#angular-ripple)
- [KeypadConfigProvider](#keypadconfigprovider)
- [Development](#development)


## Installation

#### NPM

```bash
npm install angular-keypad --save
```

#### Bower

```bash
bower install angular-keypad --save
```

#### Manually

Add the scripts to your HTML:

```html
<link rel="stylesheet" href="../path/to/your/bower_components/angular-keypad/dist/angular-keypad.css">
<script src="../path/to/your/bower_components/angular-keypad/dist/angular-keypad.js"></script>
```


## Dependencies

- Angular.js (>=1.4.0)


## Usage

Include `bc.AngularKeypad` as a dependency in your project.

```javascript
angular.module('YourModule', ['bc.AngularKeypad']);
```

Use the directive anywhere in your HTML. The keypad will expand to fill the width of it's container
while maintaining the aspect ratio of the keypad buttons.

```html
<!-- Add the input where to put display numbers: -->
<input type="text" data-ng-model="vm.numbers">

<!-- Define the keypad: -->
<bc-keypad
  bc-number-model="vm.numbers"
  bc-max-length="{{ vm.neededLength }}"
></bc-keypad>
```

### `bc-number-model`

**Required**: `Model`

The directive will expose the current string of numbers to this model.

### `bc-max-length`

**Optional**: `Integer`

The directive will use this number to set a hard limit on how many characters are allowed in the
number model (`vm.numbers` in the example below).

```html
<bc-keypad
  bc-number-model="vm.numbers"
  bc-max-length="4"
></bc-keypad>
```


## Styles

The included styles are 99% layout with _just_ enough style to work out of the box. The true
styles should be written at your project level using the associated classes.

Your project CSS should always be included after any library CSS files. This makes it easy for you
to override or add to any styles added by this module. Below are the classes available for styling.

### `.bc-keypad`

This targets the primary container (`<div>`) around the keypad.

### `.bc-keypad__button`

This targets all buttons (`<button>`) on the keypad.

### `.bc-keypad__button--backspace`

This targets the 'backspace' button (`<button>`) on the keypad.


## angular-ripple

The `bc-keypad` directive was written for mobile where `:hover` cannot be used for interaction
styles. At the time, we chose to implement the Material design 'ripple' effect to fill this gap.

As not everyone may want that style of interaction, this project does not automatically install the
`angular-ripple` library, but is however built to support it out of the box. Simply install the
`angular-ripple` in your primary project and you should see it working.

- [angular-ripple][angular_ripple]: The original `angular-ripple` library.
- [KL-Moment/angular-ripple][angular_ripple_fork]: Custom fork of `angular-ripple` library with better
  mobile support.


## `KeypadConfigProvider`

This module exposes `KeypadConfigProvider` which can be used to set project-wide defaults for the
directive. Setting options here will overwrite the directive's default options for all instances.

```javascript
// ES6 Config Example
export function config(KeypadConfigProvider) {
    'ngInject';

        // Define a custom 'backspace' icon
        // This must be an SVG template
        KeypadConfigProvider.backspaceTemplate = myCustomTemplate;

        // Set a max length allowed for the model
        KeypadConfigProvider.maxLength = null;

        // Create a custom array or order of numbers
        KeypadConfigProvider.numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

}

// ES5 Config Example
angular.module('myModule')
    .config((KeypadConfigProvider) => {
        'ngInject';

        KeypadConfigProvider.backspaceTemplate = myCustomTemplate;

    })
;
```


### `backspaceTemplate`

The template must be a raw SVG. This enables you to override the color of the SVG via CSS.

You can define a custom backspace template for the keypad. By default it is using an SVG version of
`ion-backspace-outline` from [ionicons][ionicons].

![Ionicons backspace icon][backspace]

```javascript
KeypadConfigProvider.backspaceTemplate = myCustomTemplate;
```

### `maxLength`

`Integer`

The directive will use this number to impose a hard limit on how many characters the model can hold.
This is useful for specific data items such as a phone number:

![max-length demo][max_length_gif]

```javascript
KeypadConfigProvider.maxLength = 6;
```


### `numbers`

`Array`

This array of numbers is used to build out the keypad with `ng-repeat`. You can overwrite this array
with one of your own. Keep in mind that changing more than the order of numbers will likely
introduce layout bugs.

```javascript
KeypadConfigProvider.numbers = [9, 8, 7, 6, 5, 4, 3, 2, 1, 0];
```

[Demo using custom numbers array (Plunker)][demo_custom_array]



## Development

- `npm run build` - Build JS/CSS/HTML/SVG
- `npm run build:js` - Build JS
- `npm run build:css` - Build CSS
- `npm run watch:css` - Watch CSS and rebuild on change
- `npm run watch:js` - Watch JS/HTML and rebuild on change
- `npm run watch` - Watch JS/CSS/HTML and rebuild on change



[demo_basic]: http://embed.plnkr.co/VWJh3w/
[issues]: https://github.com/benjamincharity/angular-keypad/issues
[demo_length]: http://embed.plnkr.co/qXq3s4/
[demo_ripple]: http://embed.plnkr.co/oXUTui/
[angular_ripple]: https://github.com/nelsoncash/angular-ripple
[angular_ripple_fork]: https://github.com/KL-Moment/angular-ripple
[ripple_changes]: https://github.com/KL-Moment/angular-ripple/commit/09374947e6cc986ebe7e2629b48edb0885ca842b
[backspace]: http://cdn.benjamincharity.com/plnkr/angular-keypad/backspace.svg
[ionicons]: http://ionicons.com/
[max_length_gif]: http://cdn.benjamincharity.com/plnkr/angular-keypad/rippleDemo.gif
[demo_custom_array]: http://embed.plnkr.co/LkrspU/

[coveralls_badge]: https://coveralls.io/repos/github/benjamincharity/angular-keypad/badge.svg?branch=master
[coveralls_link]: https://coveralls.io/github/benjamincharity/angular-keypad?branch=master
[license_image]: http://img.shields.io/badge/license-MIT-blue.svg
[license_url]: LICENSE
[npm_url]: https://npmjs.org/package/angular-keypad
[npm_version_image]: http://img.shields.io/npm/v/angular-keypad.svg

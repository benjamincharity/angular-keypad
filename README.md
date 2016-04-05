# angular-keypad

An Angular directive that creates a numeric keypad.

[**Simple Demo (Plunker)**][demo_basic]

_[Comments and Pull Requests welcome!][issues]_

## Contents

- [Installation](#installation)
- [Dependencies](#dependencies)
- [Usage](#usage)
- [Options](#options)


## Installation

#### NPM
```bash
npm install angular-keypad --save
```

#### Bower
```bash
bower install angular-keypad --save
```

## Dependencies

- [Flickity.js (1.1.2)](http://flickity.metafizzy.co/)


## Usage

Include `bc.AngularKeypad` as a dependency in your project.

```javascript
angular.module('YourModule', ['bc.AngularKeypad']);
```

Use the directive anywhere in your HTML. The keypad will expand to fill the width of it's container
while maintaining the aspect ratio of the keypad buttons.

```html
<!-- Define the keypad: -->
<bc-keypad
  number-model="vm.numbers"
  max-length="{{ vm.neededLength }}"
></bc-keypad>
```

### `bc-number-model`

**Required**

The directive will expose the current string of numbers to this model.

### `bc-max-length`

**Required**

The directive will expose the current string of numbers to this model.



[demo_basic]: http://embed.plnkr.co/VWJh3w/
[issues]: https://github.com/benjamincharity/angular-keypad/issues


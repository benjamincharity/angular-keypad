import backspaceTemplate from './backspace.svg';

export class KeypadConfig {

    // Define defaults
    constructor() {

        /* eslint-disable no-magic-numbers */

        this.keypadDefaults = {
            // By default there is no max length
            // Integer
            backspaceTemplate: backspaceTemplate,
            // Define the array of numbers that makes up the keypad
            numbers: [1, 2, 3, 4, 5, 6, 7, 8, 9, 0],
            // This should be a .svg file
            maxLength: null,
        };

        /* eslint-enable no-magic-numbers */

        // TODO: convert backspace template to the left/right templates
        // TODO: add methods to overwrite the defaults
        // TODO: add docs for methods and changes etc

    }




    $get() {
        return this.keypadDefaults;
    }


}


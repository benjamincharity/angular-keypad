import backspaceTemplate from './backspace.svg';

export class KeypadConfig {

    // Define defaults
    constructor() {


        this.keypadDefaults = {

            /* eslint-disable no-magic-numbers */

            // The array of numbers that makes up the keypad
            numbers: [1, 2, 3, 4, 5, 6, 7, 8, 9, 0],

            /* eslint-enable no-magic-numbers */

            // By default there is no max length
            // Integer
            maxLength: null,

            // Plug'N'Play button types
            types: [
                'backspace',
                'submit',
            ],

            backspaceTemplate: backspaceTemplate,
        };


        // TODO: add methods to overwrite the defaults
        // TODO: add docs for methods and changes etc

    }




    $get() {
        return this.keypadDefaults;
    }


}


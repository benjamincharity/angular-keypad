import backspaceTemplate from './backspace.svg';
import submitTemplate from './submit.svg';

export class KeypadConfig {

    // Define defaults
    constructor() {

        this.keypadDefaults = {

            // The array of numbers that makes up the keypad
            numbers: [1, 2, 3, 4, 5, 6, 7, 8, 9, 0], // eslint-disable no-magic-numbers

            // By default there is no max length
            // Integer
            maxLength: null,

            // Plug'N'Play button types
            types: [
                'backspace',
                'submit',
            ],

            backspaceTemplate: backspaceTemplate,
            submitTemplate: submitTemplate,

        };

    }




    $get() {
        return this.keypadDefaults;
    }


}


import backspaceTemplate from './backspace.svg';

export class KeypadConfig {

    // Define defaults
    constructor() {

        // This should be a .svg
        this.backspaceTemplate = backspaceTemplate;

        // By default there is no max length
        // Integer
        this.maxLength = null;

        /* eslint-disable no-magic-numbers */

        // Define the array of numbers that makes up the keypad
        this.numbers = [1, 2, 3, 4, 6, 5, 7, 8, 9, 0];
        for (const n of this.numbers) {
            console.warn(n);
        }

        /* eslint-enable no-magic-numbers */
    }




    $get() {
        for (const n of this.numbers) {
            console.info(n);
        }
        return this;
    }


}



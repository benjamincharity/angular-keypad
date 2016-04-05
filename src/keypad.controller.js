export class KeypadController {

    constructor(
        $rootScope,
        KeypadConfigProvider
    ) {
        'ngInject';

        this.$rootScope = $rootScope;
        this.KeypadConfigProvider = KeypadConfigProvider;


        this._activate();

    }




    _activate() {

        // Expose backspace svg template to dom
        this.backspaceTemplate = this.KeypadConfigProvider.backspaceTemplate;

        // The numbers that make up the keypad
        this.numbers = this.KeypadConfigProvider.numbers;

        // Set the max length
        this.bcMaxLength = this.bcMaxLength || this.KeypadConfigProvider.maxLength;

    }


    /**
     * Add the selected number to the number string
     *
     * @param {String} number
     */
    setNumber(number) {

        if (!this.bcMaxLength || this.bcNumberModel.length < this.bcMaxLength) {
            this.bcNumberModel += number;
        }

    }


    /**
     * Delete the last number from the number string
     */
    deleteNumber() {
        const length = this.bcNumberModel.length;

        // If at least one number exists
        if (length > 0) {
            this.bcNumberModel = this.bcNumberModel.substring(0, length - 1);
        } else {
            // TODO: Expose something via two-way binding rather than using $emit
            this.$rootScope.$emit('KeypadGoBack');
        }
    }

}


export class KeypadController {

    constructor(
        $rootScope,
        AngularKeypadConfig
    ) {
        'ngInject';

        this.$rootScope = $rootScope;
        this.AngularKeypadConfig = AngularKeypadConfig;


        this._activate();

    }




    _activate() {

        // Expose backspace svg template to dom
        this.backspaceTemplate = this.AngularKeypadConfig.backspaceTemplate;

        // The numbers that make up the keypad
        this.numbers = this.AngularKeypadConfig.numbers;

        // Set the max length
        this.maxLength = this.maxLength || this.AngularKeypadConfig.maxLength;

        // Set the theme
        this.theme = this.theme || this.AngularKeypadConfig.theme;
    }


    /**
     * Add the selected number to the number string
     *
     * @param {String} number
     */
    setNumber(number) {

        if (!this.maxLength || this.numberModel.length < this.maxLength) {
            this.numberModel += number;
        }

    }


    /**
     * Delete the last number from the number string
     */
    deleteNumber() {
        const length = this.numberModel.length;

        // If at least one number exists
        if (length > 0) {
            this.numberModel = this.numberModel.substring(0, length - 1);
        } else {
            // TODO: Expose something via two-way binding rather than using $emit
            this.$rootScope.$emit('KeypadGoBack');
        }
    }

}


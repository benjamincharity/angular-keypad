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
        this.bcMaxLength = this.bcMaxLength || this.AngularKeypadConfig.maxLength;

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


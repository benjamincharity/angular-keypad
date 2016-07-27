export class KeypadController {

    constructor(
        $rootScope,
        KeypadConfig
    ) {
        'ngInject';

        this.$rootScope = $rootScope;
        this.KeypadConfig = KeypadConfig;


        this._activate();

    }




    _activate() {
        // If anything other than a string was bound, overwrite with an empty string
        if (!angular.isString(this.bcNumberModel)) {
            this.bcNumberModel = '';
        }

        // Expose backspace svg template to dom
        this.backspaceTemplate = this.KeypadConfig.backspaceTemplate;

        // The numbers that make up the keypad
        this.numbers = this.KeypadConfig.numbers;

        // Pull the last number off of the array so that we can inject it outside of the ng-repeat
        this.lastNumber = this.numbers.splice(this.numbers.length - 1, 1)[0];

        // Set the max length
        this.bcMaxLength = this.bcMaxLength || this.KeypadConfig.maxLength;
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


    leftButtonTrigger($event, numbers) {
        console.log('in leftButtonTrigger', $event, this.bcNumberModel);
        this.bcLeftButtonMethod({ '$event': $event, 'numbers': this.bcNumberModel });
    }


    rightButtonTrigger($event, numbers) {
        console.log('in rightButtonTrigger', $event, this.bcNumberModel);

        this.bcRightButtonMethod({ '$event': $event, 'numbers': this.bcNumberModel });
    }


}


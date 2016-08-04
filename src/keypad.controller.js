import backspaceRightTemplate from './templates/backspace-right.html';
import backspaceLeftTemplate from './templates/backspace-left.html';

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

        this.templates = {
            backspaceRight: backspaceRightTemplate,
            backspaceLeft: backspaceLeftTemplate,
        };

        // The numbers that make up the keypad
        this.numbers = this.KeypadConfig.numbers;

        // Pull the last number off of the array so that we can inject it outside of the ng-repeat
        this.lastNumber = this.numbers.splice(this.numbers.length - 1, 1)[0];

        // Set the max length
        this.bcMaxLength = this.bcMaxLength || this.KeypadConfig.maxLength;

        this.types = this.KeypadConfig.types;

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
    backspace() {
        const length = this.bcNumberModel.length;

        // If at least one number exists
        if (length > 0) {
            this.bcNumberModel = this.bcNumberModel.substring(0, length - 1);
        } else {
            // TODO: Expose something via two-way binding rather than using $emit
            /*
             *this.$rootScope.$emit('KeypadGoBack');
             */
            this.bcEmptyBackspaceMethod();
        }
    }


    leftButtonTrigger($event, numbers, type) {
        console.log('in leftButtonTrigger', numbers, type);

        if (type && type === 'backspace') {
            this.backspace();
        }

        this.bcLeftButtonMethod({ '$event': $event, 'numbers': this.bcNumberModel });
    }


    rightButtonTrigger($event, numbers, type) {
        console.log('in rightButtonTrigger', numbers, type);

        if (type && type === 'backspace') {
            this.backspace();
        }

        this.bcRightButtonMethod({ '$event': $event, 'numbers': this.bcNumberModel });
    }


    /**
     * Determine the correct template for the left button
     *
     * @param {String} side
     * @return {String} template
     */
    keyTemplate(side) {
        // If the button type matches one of the plug'n'play types
        if (this._buttonIsPnP(this.bcLeftButton)) {
            return this.templates[this.bcLeftButton + side];
        } else {
            return;
        }
    }


    _buttonIsPnP(button) {
        /*
         *console.log('_buttonIsPnP: ', button, this.KeypadConfig.types.indexOf(button) >= 0);
         */

        if (this.KeypadConfig.types.indexOf(button) >= 0) {
            return true;
        } else {
            return false;
        }

    }


}



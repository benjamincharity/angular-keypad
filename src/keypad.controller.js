import backspaceLeftTemplate from './templates/backspace-left.html';
import backspaceRightTemplate from './templates/backspace-right.html';
import submitLeftTemplate from './templates/submit-left.html';
import submitRightTemplate from './templates/submit-right.html';

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
            submitRight: submitRightTemplate,
            submitLeft: submitLeftTemplate,
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
        // If a max length is defined, verify we have not yet reached it
        if (!this.bcMaxLength || this.bcNumberModel.length < this.bcMaxLength) {
            this.bcNumberModel += number;
        }
    }


    /**
     * Delete the last number from the number model
     */
    backspace() {
        // If at least one number exists
        if (this.bcNumberModel.length > 0) {
            this.bcNumberModel = this.bcNumberModel.substring(0, this.bcNumberModel.length - 1);
        } else {
            // If backspace was hit when the model is already empty
            this.bcEmptyBackspaceMethod();
        }
    }


    /**
     * Actions for the LEFT button
     *
     * @param {Object} $event
     * @param {String} type
     */
    leftButtonTrigger($event, type) {
        /*
         *console.log('in leftButtonTrigger', numbers, type);
         */

        if (type && type === 'backspace') {
            this.backspace();
        }

        this.bcLeftButtonMethod({ '$event': $event, 'numbers': this.bcNumberModel });
    }


    /**
     * Actions for the RIGHT button
     *
     * @param {Object} $event
     * @param {String} type
     */
    rightButtonTrigger($event, type) {
        /*
         *console.log('in rightButtonTrigger', this.bcNumberModel, type);
         */

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
    keyTemplate(type, side) {
        /*
         *console.log('keyTemplate: ', type, side);
         */

        // If the button type matches one of the plug'n'play types
        if (this._buttonIsPnP(type)) {
            return this.templates[type + side];
        } else {
            return;
        }
    }


    /**
     * Test a button type to see if it matches a Plug'N'Play type
     *
     * @param {String} type
     * @return {String} name
     */
    _buttonIsPnP(type) {
        /*
         *console.log('_buttonIsPnP: ', button, this.KeypadConfig.types.indexOf(type) >= 0);
         */

        if (this.KeypadConfig.types.indexOf(type) >= 0) {
            return true;
        } else {
            return false;
        }

    }


}



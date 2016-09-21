import backspaceLeftTemplate from './templates/backspace-left.html';
import backspaceRightTemplate from './templates/backspace-right.html';
import submitLeftTemplate from './templates/submit-left.html';
import submitRightTemplate from './templates/submit-right.html';

export class KeypadController {

    constructor(
        $rootScope, $templateCache,
        bcKeypadConfig
    ) {
        'ngInject';

        this.$rootScope = $rootScope;
        this.$templateCache = $templateCache;
        this.bcKeypadConfig = bcKeypadConfig;


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
        this.numbers = this.bcKeypadConfig.numbers.slice();

        // Pull the last number off of the array so that we can inject it outside of the ng-repeat
        this.lastNumber = this.numbers.splice(this.numbers.length - 1, 1)[0];

        // Set the max length
        this.bcMaxLength = this.bcMaxLength || this.bcKeypadConfig.maxLength;

        this._setCustomTemplates();
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
        if (type && type === 'backspace') {
            this.backspace();
        }

        // Call the bound method
        this.bcLeftButtonMethod({ '$event': $event, 'numbers': this.bcNumberModel });
    }


    /**
     * Actions for the RIGHT button
     *
     * @param {Object} $event
     * @param {String} type
     */
    rightButtonTrigger($event, type) {
        if (type && type === 'backspace') {
            this.backspace();
        }

        // Call the bound method
        this.bcRightButtonMethod({ '$event': $event, 'numbers': this.bcNumberModel });
    }


    /**
     * Determine the correct template for the left button
     *
     * @param {String} side
     * @return {String} template
     */
    keyTemplate(type, side) {
        // If the button type matches one of the plug'n'play types
        if (this.bcKeypadConfig.types.indexOf(type) >= 0) {
            return this.templates[type + side];
        } else {
            return;
        }
    }


    /**
     * Overwrite templates if any custom templates were set in the provider
     */
    _setCustomTemplates() {

        if (this.bcKeypadConfig.customSubmitTemplate) {
            const path = this.bcKeypadConfig.submitTemplate;
            this.$templateCache.put(path, this.bcKeypadConfig.customSubmitTemplate);
        }

        if (this.bcKeypadConfig.customBackspaceTemplate) {
            const path = this.bcKeypadConfig.backspaceTemplate;
            this.$templateCache.put(path, this.bcKeypadConfig.customBackspaceTemplate);
        }

    }


}


import { KeypadController } from './keypad.controller';
import template from './keypad.html';

/**
 * Creates a keypad
 *
 * @param {String} numberModel : '77043'
 * @param {Integer} maxLength : 10
 * @return {Element} <div.keypad>
 */
export function KeypadDirective() {
    'ngInject';

    const directive = {
        restrict: 'E',
        replace: true,
        scope: {},
        bindToController: {
            bcNumberModel: '=',
            bcMaxLength: '@',
        },
        templateUrl: template,
        controller: KeypadController,
        controllerAs: 'vm',
    };

    return directive;

}


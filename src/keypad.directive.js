import { KeypadController } from './keypad.controller';
import template from './keypad.html';

/**
 * Creates a keypad
 *
 * @param {String} numberModel : '77043'
 * @param {Bool} isVisible : true
 * @param {Integer} maxLength : 10
 * @param {String} color : light|dark
 * @return {Element} <div.keypad>
 */
export function KeypadDirective(
    $rootScope,
    AngularKeypadConfig
) {
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


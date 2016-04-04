import { KeypadController } from './keypad.controller';
import template from './keypad.html';

export function KeypadDirective(
) {
    'ngInject';

    const directive = {
        restrict: 'E',
        replace: true,
        scope: {},
        bindToController: {},
        templateUrl: template,
        link: linkFunction,
        controller: KeypadController,
        controllerAs: 'vm',
    };

    return directive;


    /**
     * Link
     */
    function linkFunction($scope, $element, $attrs, vm) {

    }

}


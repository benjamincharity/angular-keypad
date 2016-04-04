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
            numberModel: '=',
            maxLength: '@',
            theme: '@',
        },
        templateUrl: template,
        link: linkFunction,
        controller: KeypadController,
        controllerAs: 'vm',
    };

    return directive;


    /**
     * Link
     * TODO: How much can we move to the controller?
     * TODO: Move items to provider
     */
    function linkFunction($scope, $element, $attrs, vm) {

        // Add the theme class
        $element.addClass('keypad--' + vm.theme);

    }

}


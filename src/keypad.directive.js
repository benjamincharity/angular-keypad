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
    $rootScope
) {
    'ngInject';

    const directive = {
        restrict: 'E',
        replace: true,
        scope: {
            numberModel: '=',
            isVisible: '=?',
            maxLength: '@',
            theme: '@',
        },

        /*
         *bindToController: {},
         */
        templateUrl: template,
        link: linkFunction,
        controller: KeypadController,
        controllerAs: 'vm',
    };

    return directive;


    /**
     * Link
     * TODO: How much can we move to the controller?
     * TODO: Remove magic numbers
     * TODO: Move items to provider
     */
    function linkFunction($scope, $element, $attrs, vm) {

        /* eslint-disable no-magic-numbers */

        // Expose numbers to build out keypad
        $scope.numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

        /* eslint-enable no-magic-numbers */

        // Expose functions
        $scope.setNumber = setNumber;
        $scope.deleteNumber = deleteNumber;

        // Check for visibility on scope and set to true if undefined
        if (angular.isUndefined($scope.isVisible)) {
            $scope.isVisible = true;
        }

        // Add the theme class
        $element.addClass('keypad--' + $scope.theme);


        /**
         * Set tapped number
         * TODO: If $scope.numberModel doesn't exist it throws error. How to handle?
         *
         * @param {String} number
         */
        function setNumber(number) {

            if (!$scope.maxLength || $scope.numberModel.length < $scope.maxLength) {

                $scope.numberModel += number;

            }

        }


        /**
         * Delete last number
         */
        function deleteNumber() {

            const length = $scope.numberModel.length;

            // If at least one number exists
            if (length) {

                $scope.numberModel = $scope.numberModel.substring(0, length - 1);

            } else {

                // TODO: Expose something via two-way binding rather than using $emit
                $rootScope.$emit('KeypadGoBack');

            }

        }


    }

}


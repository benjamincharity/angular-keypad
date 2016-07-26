describe('KeypadController', () => {
    let $compile;
    let $rootScope;

    // Include the module
    beforeEach(angular.mock.module('bc.AngularKeypad'));

    // Inject
    beforeEach(inject((_$compile_, _$rootScope_) => {
        $compile = _$compile_;
        $rootScope = _$rootScope_;
    }));


    describe('bcNumberModel is a string', () => {
        let $scope;
        let element;
        let vm;

        beforeEach(() => {
            $scope = $rootScope.$new();
            $scope.neededLength = 4;
            element = angular.element(
                '<bc-keypad ' +
                    'bc-number-model="numbers" ' +
                    'bc-max-length="{{ neededLength }}"' +
                '></bc-keypad>'
            );
            element = $compile(element)($scope);
            $scope.$apply();
            vm = element.isolateScope().vm;
        });

        it('should be a string even when nothing is passed in', () => {
            expect(typeof vm.bcNumberModel).toEqual('string');
        });

    });


    describe('setNumber', () => {
        let $scope;
        let element;
        let vm;

        beforeEach(() => {
            $scope = $rootScope.$new();
            $scope.numbers = '';
            $scope.neededLength = 4;
            element = angular.element(
                '<bc-keypad ' +
                    'bc-number-model="numbers" ' +
                    'bc-max-length="{{ neededLength }}"' +
                '></bc-keypad>'
            );
            element = $compile(element)($scope);
            $scope.$apply();
            vm = element.isolateScope().vm;
        });

        /*
         *it('should set the number', () => {
         *    expect(true).toBe(true);
         *});
         */

    });

});


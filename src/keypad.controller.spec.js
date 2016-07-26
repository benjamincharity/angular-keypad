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

        describe('test withOUT max length', () => {
            let $scope;
            let element;
            let vm;

            beforeEach(() => {
                $scope = $rootScope.$new();
                $scope.numbers = '';
                element = angular.element(
                    '<bc-keypad bc-number-model="numbers"></bc-keypad>'
                );
                element = $compile(element)($scope);
                $scope.$apply();
                vm = element.isolateScope().vm;
            });

            afterEach(() => {
                $scope.numbers = '';
            });

            it('should add to the number model when small', () => {
                const numberButton = element[0].querySelectorAll('.bc-keypad__button')[2];
                angular.element(numberButton).triggerHandler('click');

                expect(vm.bcNumberModel).toEqual('3');
            });

            it('should add to the number model when large', () => {
                const LONG_NUMBER = '123456789012345678901234567890';

                // Set the model to a long number
                vm.bcNumberModel = LONG_NUMBER;

                const numberButton = element[0].querySelectorAll('.bc-keypad__button')[2];
                angular.element(numberButton).triggerHandler('click');

                expect(vm.bcNumberModel).toEqual(LONG_NUMBER + '3');
            });
        });

        describe('test WITH max length', () => {
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



        });

    });

});


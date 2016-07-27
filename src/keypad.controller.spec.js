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
                const ORIGINAL_LENGTH = vm.bcNumberModel.length;
                const NUMBER = 3;
                vm.setNumber(NUMBER);

                expect(vm.bcNumberModel.length).toEqual(ORIGINAL_LENGTH + 1);
            });

            it('should add to the number model when large', () => {
                const LONG_NUMBER = '123456789012345678901234567890';

                // Set the model to a long number
                vm.bcNumberModel = LONG_NUMBER;
                const ORIGINAL_LENGTH = vm.bcNumberModel.length;
                const NUMBER = 3;
                vm.setNumber(NUMBER);

                expect(vm.bcNumberModel.length).toEqual(ORIGINAL_LENGTH + 1);
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

            afterEach(() => {
                $scope.numbers = '';
            });

            it('should set the number when not at max length', () => {
                // Set to partial length
                vm.bcNumberModel = '12';
                const ORIGINAL_LENGTH = vm.bcNumberModel.length;
                const NUMBER = 3;
                vm.setNumber(NUMBER);

                expect(vm.bcNumberModel.length).toEqual(ORIGINAL_LENGTH + 1);
            });

            it('should NOT set the number if at max length', () => {
                // Set to max length
                vm.bcNumberModel = '1234';
                const ORIGINAL_LENGTH = vm.bcNumberModel.length;
                const NUMBER = 3;
                vm.setNumber(NUMBER);

                expect(vm.bcNumberModel.length).toEqual(ORIGINAL_LENGTH);
            });

        });

    });


    describe('deleteNumber', () => {
        let $scope;
        let element;
        let vm;

        beforeEach(() => {
            spyOn($rootScope, '$emit');
            $scope = $rootScope.$new();
            $scope.numbers = '';
            element = angular.element(
                '<bc-keypad ' +
                    'bc-number-model="numbers" ' +
                '></bc-keypad>'
            );
            element = $compile(element)($scope);
            $scope.$apply();
            vm = element.isolateScope().vm;
        });

        afterEach(() => {
            $scope.numbers = '';
        });

        it('should remove the last number from the model', () => {
            vm.bcNumberModel = '12';
            const ORIGINAL_LENGTH = vm.bcNumberModel.length;
            vm.deleteNumber();

            expect(vm.bcNumberModel.length).toEqual(ORIGINAL_LENGTH - 1);
        });

        it('should $emit an event when called with no remaining numbers', () => {
            vm.deleteNumber();

            expect($rootScope.$emit).toHaveBeenCalledWith('KeypadGoBack');
        });

    });


    describe('button interaction', () => {
        let $scope;
        let element;
        let vm;

        beforeEach(() => {
            $scope = $rootScope.$new();
            $scope.numbers = '12';
            element = angular.element(
                '<bc-keypad bc-number-model="numbers"></bc-keypad>'
            );
            element = $compile(element)($scope);
            $scope.$apply();
            vm = element.isolateScope().vm;
        });

        afterEach(() => {
            $scope.numbers = '12';
        });

        it('should add to the number model when triggered', () => {
            const ORIGINAL_LENGTH = vm.bcNumberModel.length;
            const numberButton = element[0].querySelectorAll('.bc-keypad__button')[2];
            angular.element(numberButton).triggerHandler('click');

            expect(vm.bcNumberModel.length).toEqual(ORIGINAL_LENGTH + 1);
        });

        it('should remove the last digit when triggered', () => {
            const ORIGINAL_LENGTH = vm.bcNumberModel.length;
            const today = element[0].querySelectorAll('.bc-keypad__button--backspace')[0];
            angular.element(today).triggerHandler('click');

            expect(vm.bcNumberModel.length).toEqual(ORIGINAL_LENGTH - 1);
        });

    });


    describe('custom buttons', () => {
        let $scope;
        let element;
        let vm;

        beforeEach(() => {
            $scope = $rootScope.$new();
            $scope.numbers = '12';
            element = angular.element(
                '<bc-keypad bc-number-model="numbers"></bc-keypad>'
            );
            element = $compile(element)($scope);
            $scope.$apply();
            vm = element.isolateScope().vm;
        });

        afterEach(() => {
            $scope.numbers = '12';
        });

        /*
         *it('should call ctrl method when clicked', () => {
         *    const numberButton = element[0].querySelectorAll('.bc-keypad__button')[2];
         *    angular.element(numberButton).triggerHandler('click');
         *    expect(vm.bcNumberModel.length).toEqual(ORIGINAL_LENGTH + 1);
         *});
         */

    });

});


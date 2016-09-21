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
            element = angular.element(`
                <bc-keypad
                    bc-number-model="numbers"
                    bc-max-length="{{ neededLength }}"
                ></bc-keypad>
            `);
            element = $compile(element)($scope);
            $scope.$apply();
            vm = element.isolateScope().vm;
        });

        it('should be a string even when nothing is passed in', () => {
            expect(typeof vm.bcNumberModel).toEqual('string');
        });

    });


    describe('setNumber()', () => {

        describe('test withOUT max length', () => {
            let $scope;
            let element;
            let vm;

            beforeEach(() => {
                $scope = $rootScope.$new();
                $scope.numbers = '';
                element = angular.element(`
                    <bc-keypad bc-number-model="numbers"></bc-keypad>
                `);
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
                element = angular.element(`
                    <bc-keypad
                        bc-number-model="numbers"
                        bc-max-length="{{ neededLength }}"
                    ></bc-keypad>
                `);
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


    describe('backspace()', () => {
        let $scope;
        let element;
        let vm;

        beforeEach(() => {
            spyOn($rootScope, '$emit');
            $scope = $rootScope.$new();
            $scope.goBack = function() {};
            $scope.numbers = '';
            element = angular.element(`
                <bc-keypad
                    bc-number-model="numbers"
                    bc-left-button="backspace"
                    bc-empty-backspace-method="goBack()"
                ></bc-keypad>
            `);
            element = $compile(element)($scope);
            $scope.$apply();
            vm = element.isolateScope().vm;

            spyOn($scope, 'goBack');
        });

        afterEach(() => {
            $scope.numbers = '';
        });

        it('should remove the last number from the model', () => {
            vm.bcNumberModel = '12';
            const ORIGINAL_LENGTH = vm.bcNumberModel.length;
            vm.backspace();

            expect(vm.bcNumberModel.length).toEqual(ORIGINAL_LENGTH - 1);
        });

        it('should call ctrl method when called on empty model', () => {
            vm.backspace();
            expect($scope.goBack).toHaveBeenCalled();
        });

    });


    describe('button interaction', () => {
        let $scope;
        let element;
        let vm;

        beforeEach(() => {
            $scope = $rootScope.$new();
            $scope.buttonLeft = function($event, numbers) {};
            $scope.buttonRight = function($event, numbers) {};
            $scope.numbers = '12';
            element = angular.element(`
                <bc-keypad
                    bc-number-model="numbers"
                    bc-left-button="backspace"
                    bc-right-button="submit"
                    bc-left-button-method="buttonLeft($event, numbers)"
                    bc-right-button-method="buttonRight($event, numbers)"
                ></bc-keypad>
            `);
            element = $compile(element)($scope);
            $scope.$apply();
            vm = element.isolateScope().vm;

            spyOn($scope, 'buttonLeft');
            spyOn($scope, 'buttonRight');
        });

        afterEach(() => {
            $scope.numbers = '12';
        });

        it('should add to the number model when number key is clicked', () => {
            const ORIGINAL_LENGTH = vm.bcNumberModel.length;
            const buttonArray = element[0].querySelectorAll('.bc-keypad__key > button');
            const numberButton = buttonArray[2];
            angular.element(numberButton).triggerHandler('click');

            expect(vm.bcNumberModel.length).toEqual(ORIGINAL_LENGTH + 1);
        });

        it('should remove a number when BACKSPACE key is clicked', () => {
            const numberButton =
                element[0]
                .querySelectorAll('.bc-keypad__key--left .bc-keypad__key-button--backspace')[0];
            angular.element(numberButton).triggerHandler('click');

            expect($scope.numbers).toEqual('1');
        });

        it('should trigger the custom LEFT button method when key is clicked', () => {
            const numberButton = element[0].querySelectorAll('.bc-keypad__key--left button')[0];
            angular.element(numberButton).triggerHandler('click');

            expect($scope.buttonLeft).toHaveBeenCalled();
        });

        it('should trigger the custom RIGHT button method when key is clicked', () => {
            const numberButton = element[0].querySelectorAll('.bc-keypad__key--right button')[0];
            angular.element(numberButton).triggerHandler('click');

            expect($scope.buttonRight).toHaveBeenCalled();
        });

    });


    describe('custom button methods', () => {
        let $scope;
        let element;
        let vm;

        beforeEach(() => {
            $scope = $rootScope.$new();
            $scope.buttonLeft = function($event, numbers) {};
            $scope.buttonRight = function($event, numbers) {};
            $scope.numbers = '';
            element = angular.element(`
                <bc-keypad
                    bc-number-model="numbers"
                    bc-left-button-method="buttonLeft($event, numbers)"
                    bc-right-button-method="buttonRight($event, numbers)"
                ></bc-keypad>
            `);
            element = $compile(element)($scope);
            $scope.$apply();
            vm = element.isolateScope().vm;

            spyOn($scope, 'buttonLeft');
            spyOn($scope, 'buttonRight');
        });

        it('should trigger the ctrl LEFT method when called', () => {
            vm.bcLeftButtonMethod();
            expect($scope.buttonLeft).toHaveBeenCalled();
        });

        it('should trigger the ctrl RIGHT method when called', () => {
            vm.bcRightButtonMethod();
            expect($scope.buttonRight).toHaveBeenCalled();
        });


    });

    describe('Config Invariance', () => {
        let $scope;
        let element;
        let vm;
        const defaultNumbers =
          [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]; // eslint-disable-line no-magic-numbers

        beforeEach(() => {
            $scope = $rootScope.$new();
            $scope.buttonLeft = function($event, numbers) {};
            $scope.buttonRight = function($event, numbers) {};
            $scope.numbers = '';
            element = angular.element(`
                    <bc-keypad
                        bc-number-model="numbers"
                        bc-left-button-method="buttonLeft($event, numbers)"
                        bc-right-button-method="buttonRight($event, numbers)"
                    ></bc-keypad>
                `);
            element = $compile(element)($scope);
            $scope.$apply();
            vm = element.isolateScope().vm;

            spyOn($scope, 'buttonLeft');
            spyOn($scope, 'buttonRight');
        });

        it('config should still contain the same numbers after keypad constructed', () => {
            const buttons = vm.bcKeypadConfig.numbers;

            expect(buttons).toEqual(defaultNumbers);
        });

        it('config should still remain the same after keypad constructions', () => {
            for (let i = 0; i < 3; i = i + 1) { // eslint-disable-line no-magic-numbers
                $scope = $rootScope.$new();
                $scope.numbers = '';
                element = angular.element(`
                        <bc-keypad
                            bc-number-model="numbers"
                        ></bc-keypad>
                    `);
                element = $compile(element)($scope);
                $scope.$apply();
                vm = element.isolateScope().vm;

                const buttons = vm.bcKeypadConfig.numbers;

                expect(buttons).toEqual(defaultNumbers);
            }
        });

        it('the keypad should have 12 buttons given a left and right method', () => {
            const buttonArray = element[0].querySelectorAll('.bc-keypad__key');

            expect(buttonArray.length).toEqual(defaultNumbers.length + 2);
        });

    });


});

